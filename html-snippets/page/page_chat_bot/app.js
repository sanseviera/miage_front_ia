import Content from  './content.js';
import Style from  './style.js';

class Page extends HTMLElement {

    html;
    style;

    positionOfMatriceOfMessages = 0; // position dans la matriceOfMessages
    matriceOfMessages = [[]]; // matrice de messages chaque ligne représente ensemble de messages d'un utilisateur

    static get observedAttributes() {
        return [];
    }

    /*
    *   Méthode pour mettre à jour le contenu principal
    */
    updateContent() {
        let matriceOfMessagesToString = "";
                    for (let i = 0; i < this.matriceOfMessages[this.positionOfMatriceOfMessages].length; i++) {
                        if(this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["type"] === "image"){
                            matriceOfMessagesToString = `${matriceOfMessagesToString} 
                            <div class="image-container">
                                <img src="${this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["content"]}" alt="image" style="width: 100%; max-width:300px; height: auto;"/>
                                <div>
                                    <button class="image-buttom">Open</button>
                                </div>
                            </div>
                            `;
                          
                        }
                        else{
                            matriceOfMessagesToString = `${matriceOfMessagesToString} 
                            <p>
                                ${this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["content"]}
                            </p>
                            `;
                        }
                    }
                    this.shadow.querySelector(".output").innerHTML = matriceOfMessagesToString;
                    // Ajouter un event listener pour le bouton de téléchargement
                    this.shadow.querySelectorAll(".image-buttom").forEach((element) => {
                        element.addEventListener('click', (e) => {
                            let url = e.target.parentElement.parentElement.querySelector("img").src;
                            window.open(url, '_blank');
                        });
                    } );
                }


    /*
    *   Méthode pour créer un nouveau chat
    */
    createNewChat() {
        this.positionOfMatriceOfMessages++;
        let id = this.positionOfMatriceOfMessages+1; // Capturer la position actuelle

        this.matriceOfMessages.push([]);
        this.shadow.querySelector(".output").innerHTML = "";
        this.shadow.querySelector(".history").innerHTML = ` <p id="history_${id}">Chat ${id}</p> ${this.shadow.querySelector(".history").innerHTML}` // ajoute un nouveau chat à la liste des chats
         
        for (let i = 0; i < this.matriceOfMessages.length  ; i++) {
            this.shadow.getElementById(`history_${i+1}`).addEventListener("click", (e) => {
                this.positionOfMatriceOfMessages = i;
                this.updateContent();
            });
        }
    }

    

      
      

    connectedCallback() {

        /*
        *  Event listener pour le bouton de téléchargement de fichier
        */
        this.shadow.getElementById('fileInput').addEventListener('change', (e) => {
            let file = this.shadow.getElementById("fileInput").files[0];
            if (file) {
                const reader = new FileReader();
                // Définissez ce qui se passe lorsque le fichier est chargé
                reader.onload = function(event) {
                    const content = event.target.result;
                     // Mettre à jour la valeur de l'élément chat-input
                    this.shadowRoot.getElementById("chat-input").value = content;
                }.bind(this);  // Assurez-vous que 'this' fait référence à l'instance actuelle
                // Lisez le fichier comme du texte
                reader.readAsText(file);
            } 
        });

        /*
        *   Event listener pour afficher les boutons si la commande est une image 
        */
        this.shadow.getElementById('chat-input').addEventListener('input', (e) => {
            let tmp = this.shadow.getElementById("chat-input");
            let contentForm = tmp.value;
            if (contentForm.startsWith("\\image ")) {
                this.shadow.querySelector(".tool").style.display = "flex";
            } else {
                this.shadow.querySelector(".tool").style.display = "none";
            }
        });

        
        /*
        *
        *   Event listener pour le bouton "New chat"
        */
        this.shadow.getElementById("new-chat").addEventListener("click", (e) => {
            this.createNewChat();
        });

        this.shadow.querySelectorAll('.dropdown-content').forEach((element) => {
            element.addEventListener('click', (e) => {
                let tmp = this.shadow.getElementById("chat-input");
                tmp.value = tmp.value + " " + e.target.innerHTML;
                
            }
            );
        });
        
        /*
        *   Event listener pour le bouton submit
        */
       this.shadow.getElementById("submit").addEventListener("click", (e) => {


        let tmp = this.shadow.getElementById("chat-input");
        let contentForm = tmp.value;
        let sousChaine = "";
        let route = "";
        let lectureVocale = false; 


        if(contentForm !== ""){// on verifie que le champ n'est pas vide sinon on ne fait rien

            this.matriceOfMessages[this.positionOfMatriceOfMessages].push({"content":contentForm,"type":"text"}); // add the message to the matrice


            if (contentForm.startsWith("\\image ")) {
                sousChaine = contentForm.substring("\\image ".length);
                route = "image";
            } else if(contentForm.startsWith("\\speech ")){
                route = "chat";
                sousChaine = contentForm.substring("\\speech ".length);
                lectureVocale=true;
            } else if (contentForm.startsWith("\\stable-diffusion ")){
                sousChaine = contentForm.substring("\\stable-diffusion ".length);
            } else if (contentForm.startsWith("\\test ")){
                sousChaine = contentForm.substring("\\test ".length);
                route = "test";
            } else {
                route = "chat";
            }

            const formData = new FormData();
            formData.append('prompt', contentForm);

            this.shadow.querySelector(".popup").style.display = "flex"; // afficher le loader
            fetch(`http://localhost:3001/${route}`, {
                method: 'POST',
                body: formData,
            })
            .then(response => response.json())
            .then(data => {
                this.shadow.querySelector(".popup").style.display = "none"; 
                if(lectureVocale == true){
                    if ('speechSynthesis' in window) {
                        // Créer un nouvel objet SpeechSynthesisUtterance pour définir le message à lire
                        let message = new SpeechSynthesisUtterance(data.choices[0].message.content);
                    
                        // Utiliser l'API SpeechSynthesis pour lire le message à haute voix
                        window.speechSynthesis.speak(message);
                    } else {
                        // Afficher un message d'erreur si l'API n'est pas disponible
                        console.error('L\'API SpeechSynthesis n\'est pas disponible dans ce navigateur.');
                    }
                    
                }

                    tmp.value = ""; // clear the input
                    if (route === "image") {
                        this.matriceOfMessages[this.positionOfMatriceOfMessages].push({"content":data.data[0].url,"type":"image"}); // add the message to the matrice
                    }
                    else{
                        this.matriceOfMessages[this.positionOfMatriceOfMessages].push({"content":data.choices[0].message.content,"type":"chat"}); // add the message to the matrice
                    }
                    this.updateContent(); // update the content
                    // les deux lignes suivantes permettent de scroller vers le bas automatiquement pour voir le dernier message ajouté
                    var div = this.shadow.querySelector('.top-section');
                    div.scrollTop = div.scrollHeight;

                    this.shadow.querySelector(".tool").style.display = "none";

                
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }});


        // Event listener pour le bouton de 
        this.shadow.querySelector(".history").innerHTML = `${this.shadow.querySelector(".history").innerHTML}  <p id="history_1">Chat 1</p> ${this.shadow.querySelector(".history").innerHTML}`;
        
    }
    
    constructor(){
        super();
        this.html = new Content();
        this.style = new Style();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.innerHTML = this.style.content() + " " + this.html.content();
    }
}

customElements.define('page-chat-bot', Page);


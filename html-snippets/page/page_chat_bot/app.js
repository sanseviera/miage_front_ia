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


    resetSizeTextAera(){
        const textarea = this.shadow.querySelector('.chat-input');
        textarea.style.height = '';
    }

  
    /*
    *   Méthode pour mettre à jour le contenu principal
    */
    updateContent() {
        let matriceOfMessagesToString = "";
                    for (let i = 0; i < this.matriceOfMessages[this.positionOfMatriceOfMessages].length; i++) {
                        if(this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["type"] === "image" && this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["author"] === "IA"){
                            matriceOfMessagesToString = `
                                ${matriceOfMessagesToString} 
                                <div class="container-message-conversation container-message-conversation-robot">
                                    <div class="container-message-icon">
                                        <img src="./data/robot.svg" alt="robot" style="width: 50px; height: 50px;" />
                                    </div>
                                    <div class="triangle-left"></div>
                                        <div class="container-message">
                                            <div class="image-container">
                                                <img class="myImage" src="${this.matriceOfMessages[this.positionOfMatriceOfMessages][i]['content']}" alt="image" />
                                                <div>
                                                    <button class="image-button">Open</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                `;
                          
                        }
                        else if (this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["type"] === "text" && this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["author"] === "IA"){
                            matriceOfMessagesToString = `${matriceOfMessagesToString} 
                            <div class= "container-message-conversation container-message-conversation-robot ">
                                <div class="container-message-icon">
                                    <img src="./data/robot.svg" alt="robot" style="width: 50px; height: 50px;"/>
                                </div>
                                <div class="triangle-left"></div>
                                <div class="container-message">
                                    <p>
                                        ${this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["content"]}
                                    </p>
                                </div>
                            </div>
                            `;
                        }
                        else if (this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["type"] === "text" && this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["author"] === "human"){
                            matriceOfMessagesToString = `${matriceOfMessagesToString} 
                            <div class= "container-message-conversation container-message-conversation-human ">
                                <div class="container-message">
                                    <p>
                                        ${this.matriceOfMessages[this.positionOfMatriceOfMessages][i]["content"]}
                                    </p>
                                </div>
                                <div class="triangle-right"></div>
                                <div class="container-message-icon">
                                    <img src="./data/human.svg" alt="human" style="width: 50px; height: 50px;"/>
                                </div>
                            </div>
                            `;
                        }
                    }
                    this.shadow.querySelector(".output").innerHTML = matriceOfMessagesToString;
                    // Ajouter un event listener pour le bouton de téléchargement
                    this.shadow.querySelectorAll(".image-button").forEach((element) => {
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
        // Écoute des événements input pour ajuster la hauteur
        this.shadow.querySelector('.chat-input').addEventListener('input', function() {
            const lineHeight = parseInt(getComputedStyle(this).lineHeight);
            const maxHeight = lineHeight * 5;
            this.style.height = 'auto';
            if (this.scrollHeight > maxHeight) {
                this.style.height = maxHeight + 'px';
                this.style.overflowY = 'scroll'; // Ajoute une barre de défilement si nécessaire
            } else {
                this.style.height = this.scrollHeight + 'px';
                this.style.overflowY = 'hidden'; // Masque la barre de défilement si le contenu n'est pas assez grand
            }
        });


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

            this.matriceOfMessages[this.positionOfMatriceOfMessages].push({"author":"human","content":contentForm,"type":"text"}); // add the message to the matrice


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
            fetch(`https://backend-projet-ia-m1miage-2023-2024.onrender.com/${route}`, {
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
                    this.resetSizeTextAera(); // reset the size of the text area
                    if (route === "image") {
                        this.matriceOfMessages[this.positionOfMatriceOfMessages].push({"author":"IA","content":data.data[0].url,"type":"image"}); // add the message to the matrice
                    }
                    else{
                        this.matriceOfMessages[this.positionOfMatriceOfMessages].push({"author":"IA","content":data.choices[0].message.content,"type":"text"}); // add the message to the matrice
                    }
                    this.updateContent(); // update the content
                    // les deux lignes suivantes permettent de scroller vers le bas automatiquement pour voir le dernier message ajouté
                    var div = this.shadow.querySelector('.top-section-container');
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


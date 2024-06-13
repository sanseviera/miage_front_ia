import Content from './content.js';
import Style from './style.js';

class Page extends HTMLElement {

    html;
    style;

    static get observedAttributes() {
        return [];
    }

    connectedCallback() {
        console.log("ConnectedCallback called"); // Debugging message

        const form = this.shadow.getElementById("analyzeForm");
        if (!form) {
            console.error("Form element not found!"); // Debugging message
            return;
        }
        console.log("Form element found", form); // Debugging message

        const submitButton = this.shadow.getElementById("submitAnalyze");
        if (!submitButton) {
            console.error("Submit button not found!"); // Debugging message
            return;
        }
        console.log("Submit button found", submitButton); // Debugging message

        submitButton.addEventListener("click", async (event) => {
            event.preventDefault();
            console.log("Form submit event triggered"); // Debugging message

            const formData = new FormData(form);
            const fileInput = this.shadow.getElementById("file").files[0];
            const textInput = this.shadow.querySelector(".textInput").value;
            const analysisType = this.shadow.getElementById("analysis_type").value;

            if (!fileInput && !textInput) {
                alert("Veuillez entrer du texte ou choisir un fichier.");
                console.error("No input provided"); // Debugging message
                return;
            }

            if (fileInput && textInput) {
                alert("Veuillez entrer soit du texte soit choisir un fichier, mais pas les deux à la fois.");
                console.error("No input provided"); // Debugging message
                return;
            }

            if (fileInput) {
                formData.append("file", fileInput);
                console.log("File input detected"); // Debugging message
            }

            if (textInput) {
                formData.append("content", textInput);
                console.log("Text input detected"); // Debugging message
            }

            formData.append("analysis_type", analysisType);

            this.shadow.querySelector(".popup").style.display = "block"; // afficher le loader
            console.log("Form data prepared for submission", formData); // Debugging message

            try {
                const response = await fetch('http://127.0.0.1:5000/diagnose', {
                    method: 'POST',
                    body: formData
                });
                console.log("Response received from server"); // Debugging message

                const result = await response.json();
                console.log("Response JSON parsed", result); // Debugging message

                this.shadow.querySelector(".popup").style.display = "none";
                this.shadow.getElementById("analyzedContent").textContent = result.content;
                this.shadow.getElementById("diagnosisResult").textContent = result.result;

                this.shadow.getElementById("resultPopup").style.display = "block";

                // Réinitialiser les champs du formulaire
                form.reset();
                console.log("Form reset"); // Debugging message
            } catch (error) {
                console.error('Error:', error);
                this.shadow.querySelector(".popup").style.display = "none";
            }
        });

        this.shadow.querySelector(".close").onclick = () => {
            this.shadow.getElementById("resultPopup").style.display = "none";
            this.shadow.getElementById("analyzedContent").textContent = "";
            this.shadow.getElementById("diagnosisResult").textContent = "";
            console.log("Popup closed and content reset"); // Debugging message
        };

        window.onclick = (event) => {
            if (event.target == this.shadow.getElementById("resultPopup")) {
                this.shadow.getElementById("resultPopup").style.display = "none";
                this.shadow.getElementById("analyzedContent").textContent = "";
                this.shadow.getElementById("diagnosisResult").textContent = "";
                console.log("Popup closed by clicking outside and content reset"); // Debugging message
            }
        };
    }

    constructor(){
        super();
        console.log("Constructor called"); // Debugging message
        this.html = new Content();
        this.style = new Style();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadow.innerHTML = this.style.content() + " " + this.html.content();
        console.log("Shadow DOM initialized"); // Debugging message
    }
}

customElements.define('page-analyseur', Page);

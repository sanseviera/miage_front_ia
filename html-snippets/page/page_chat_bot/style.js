export default class Style{
  content(){ return `
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Creepster&family=Open+Sans:wght@300;400;500;600;700;800&display=swap');

    :root {
      height: 100%;
      width: 100%;
    }

    :host {
      height: 100%;
      width: 100%;
    }


    * {
        color: white;
        font-family: 'Creepster', cursive;
        font-family: 'Open Sans', sans-serif;
    }
    
    body {
        margin: 0;
        padding: 0;
        background-color: #343541;
        display: flex;
    }
    
    h1 {
        font-size: 33px;
        font-weight: 600;
        padding-top: 200px;

    }
    
    
    .side-bar {
        background-color: #202123;
        width: 244px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      
        overflow-y: auto; /* Ajoute un défilement si le contenu dépasse la hauteur de l'écran */
    }

    .englob {
      width: 100%;
      height: 100%;
      max-height: calc( 100vh - 50px - 40px );
      flex-direction: row;
      display: flex;

    }
    
    
    
    .main {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        justify-content: space-between;
        height: 100%;
        width: calc( 100vw - 244px );
        position: relative;
        background-color: #343541;
        
        overflow-x: hidden;
    }

    .top-section {

        display: flex;
        width: 100%;
        position: relative;
        flex-grow: 1;
        flex-direction: column;
        overflow-y: hidden;
        overflow-x: hidden;
      
    }

    .top-section-container {
        display: flex;
        flex-grow: 1; 
        flex-direction: column;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .bottom-section {
        display: flex;
        flex-shrink: 0;
        bottom: 0; /* Positionne le bas de la section en bas de la fenêtre */
        margin-bottom: 20px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #11111100;
        width: 100%;
    }

    .fondu{
        position: absolute;
        bottom: 0;
        height:40px;
        width:100%;
        background-color: #11111100;
        background: linear-gradient(#11111100, #343541);

    }
    
    .dropbtn {
        background-color: #eff1f0;
        color: black;
        padding: 16px;
        font-size: 16px;
        border: none;
      }
      
      .dropdown {
        position: relative;
        color: white;

        display: flex;
        flex-direction: column;
      }
      
      .dropdown-content {
        display: none;

        position: absolute;
        background-color: #f6f6f6;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
      }
      
      .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
      }
      
      .dropdown-content a:hover {background-color: #ddd;}
      
      .dropdown:hover .dropdown-content {display: block;}
      
      .dropdown:hover .dropbtn {background-color: #3e8e41;}

    .tool {
        display: none;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10px;
    }
    
    .info {
        color: rgba(255, 255, 255, 0.5);
        font-size: 11px;
        padding: 10px;
    }
    
    input {
        border: none;
        background-color: rgba(255, 255, 255, 0.5);
        width: 100%;
        font-size: 20px;
        padding: 12px 15px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.05) 0 54px 55px,
            rgba(0, 0, 0, 0.05) 0 -12px 30px,
            rgba(0, 0, 0, 0.05) 0 4px 6px,
            rgba(0, 0, 0, 0.05) 0 12px 3px,
            rgba(0, 0, 0, 0.09) 0 -3px 5px;
    }
    
    input:focus {
        outline: none;
    }

    .container-message-conversation {
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;


    }

    .container-message-conversation-robot {
      
        justify-content: flex-start;

    }

    .container-message-conversation-human {
 
        justify-content: flex-end;

    }

    .container-message-icon {

        background-color: #ccc;
        border-radius: 100%;
        height: 70px;
        width: 70px;
        align-items: center;
        display: flex;
        justify-content: center;
        margin: 10px;
    }




    .container-message {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        max-width: 650px;
        overflow: hidden;
    }



    
    .input-container {
        align-items: center;
        position:relative;
        width: 100%;
        max-width: 650px;
        display: flex;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        overflow: hidden;
    }
    
    .input-container #submit {
        position: relative;
        margin-left: auto;
        cursor: pointer;
        background-image: url("./data/send.svg"); 
        background-size: cover;
        background-position: center; 
        background-repeat: no-repeat; 
        height: 30px;
        width: 30px;
    }

    .input-container #piece {
        position: relative;
        margin-left: auto;
        cursor: pointer;
        background-image: url("./data/attachment.svg"); /* Corrigez le chemin de l'image */
        background-size: cover; /* Ajuste l'image de fond pour couvrir entièrement le bouton */
        background-position: center; /* Centre l'image de fond */
        background-repeat: no-repeat; /* Empêche la répétition de l'image de fond */
        height: 30px;
        width: 30px;
    }

    .chat-input {
        display: block;
        width: 100%;
        padding: 10px;
        box-sizing: border-box;
        resize: none;
        overflow-y: auto; /* Ajoute une barre de défilement vertical si nécessaire */
        font-size: 14px;
        line-height: 1.5;
        color: #333;
    }

    .divSubmit{
        display: flex;
    }

    .divSubmitForm{
        display: flex;
        flex-grow: 1;
        padding-left : 10px;
        padding-right : 10px;
    }

    #fileInput{
        display: none;
      }
      #icon{
        height: 30px;
        width: 30px;
        cursor: pointer;
      }

      .triangle-left {
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-right: 10px solid white;
        border-bottom: 5px solid transparent;

      }

    .triangle-right {
        width: 0;
        height: 0;
        border-top: 5px solid transparent;
        border-left: 10px solid white;
        border-bottom: 5px solid transparent;

      }
    
    .output {
        display: flex;
        flex-grow: 1;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        padding: 10px;
    }

    
    button {
        border : solid 0.5px rgba(255, 255, 255, 0.5);
        background-color: transparent;
        border-radius: 5px;
        padding:10px;
        margin: 10px;
    }
    
    nav {
        border : solid 0.5px rgba(255, 255, 255, 0.5);
        padding:10px;
        margin: 10px;
        border-radius: 5px;
    }
    
    .history {
        padding:10px;
        margin: 10px;
        display:flex;
        flex-direction: column;
        height:100%
    }
    
    .history p {
        cursor:pointer;
    }
    
    .image-container {
        overflow: hidden;
        box-shadow: rgb(38, 57, 77) 0 20px 30px -10px;
    }

    .myImage{
        border-radius: 10px;
        width: 100%;
        max-width:300px; 
        height: auto;
    }
    
    
    
    /* Animation for loader */
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    
    .input-container input {
        border: none;
        flex-grow: 1;    
    }
    
    .input-container button {
        color: white;
        border: none;
        padding: 5px 10px;
        border-radius: 5px;
        cursor: pointer;
        margin-left: auto; /* Pousse le bouton vers la droite */
        margin-right: auto; /* Espace à droite du bouton */
    }
    

    .input-container input[type="text"] {
        border: none;
        flex-grow: 1;
        margin: 0 10px; /* Spacing on both sides */
    }
    
    .file-upload-label {
        background-color: transparent;
        border: none;
        padding: 0;
        margin: 0;
    }
    
    .file-upload-label:hover {
        background-color: rgb(39, 42, 51); /* Couleur bleu plus foncé au survol */
    }
    
    .input-container .file-upload-label {
        position: relative; /* Ensure the label is positioned relatively within the flex container */
        margin-right: auto; /* This will push everything else to the right */
        padding: 5px 10px;
        cursor: pointer;
    }
    
    /* Make sure the file input button appears on the left */
    .input-container .file-upload-label {
        order: -1; /* This ensures that the label is the first item in the flex container */
        color: white;
        padding: 5px 10px;
        border-radius: 5px;
    }
    
    .input-container .file-upload-label i {
        pointer-events: none; /* Prevent the icon from blocking clicks */
    }
    
    .input-container .file-input {
        display: none; /* Hide the actual file input */
    }
    
    .file_load {
        padding: 10px;
        cursor: pointer;
    }

    .popup {
        position: absolute;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.78);
      
        display: none;
        z-index: 1000;
    }


/* HTML: */
/* HTML: <div class="loader"></div> */
.loader {
    width: 50px;
    aspect-ratio: 1;
    display: grid;
    animation: l14 4s infinite;
  }
  .loader::before,
  .loader::after {    
    content: "";
    grid-area: 1/1;
    border: 8px solid;
    border-radius: 50%;
    border-color: red red #0000 #0000;
    mix-blend-mode: darken;
    animation: l14 1s infinite linear;
  }
  .loader::after {
    border-color: #0000 #0000 blue blue;
    animation-direction: reverse;
  }
  @keyframes l14{ 
    100%{transform: rotate(1turn)}
  }

    </style>
  `
    }
}
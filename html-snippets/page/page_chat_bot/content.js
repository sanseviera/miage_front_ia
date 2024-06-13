
export default class Content{
  content(){
    return  ` 
    <div class="englob">
    <section class="side-bar">
        <button id="new-chat">New chat</button>
        <div class="history"></div>
        <nav>
            <p>Made by DIOP Serigne Rawane and BORREANI Théo.</p>
        </nav>
    </section>

    <section class="main">

        <div class="popup">
            <image src="./data/loader.gif" alt="image" style="width: 100%; max-width:300px; height: auto;" />
        </div>  

        <div class="top-section">
            <h1>MyGPT</h1>
            <div class="output"></div>
        </div>

        <div class="bottom-section">
        <div class="tool">
            <div class="dropdown">
                Couleur
                <button class="dropbtn">couleur</button>
                <div class="dropdown-content">
                    <a id=".dropdown-content-elt" href="#"> image avec une prédominance de bleu </a>
                    <a id=".dropdown-content-elt" href="#"> image avec une prédominance de jaune </a>
                    <a id=".dropdown-content-elt" href="#"> image avec une prédominance de vert </a>
                </div>
            </div>
            <div class="dropdown">
                Lieu
                <button class="dropbtn">lieu</button>
                <div class="dropdown-content">
                    <a href="#"> dans la forret </a>
                    <a href="#"> dans un appartement </a>
                    <a href="#"> dans une villa </a>
                </div>
            </div>
            <div class="dropdown">
                Figurants
                <button class="dropbtn">figurants</button>
                <div class="dropdown-content">
                    <a href="#"> avec des figurants </a>
                    <a href="#"> sans figurants </a>
                </div>
            </div>
            
        </div>
             <div id="chat-form" class="input-container">
                <div class="loader" style="display:none">Loading...</div>
                <label for="fileInput"> 
                    <img id="icon" src="./data/attachment.svg">
                </label>
                <input id="fileInput" type="file">
                <input type="text" id="chat-input" placeholder="Entrez votre message...">
                <button  id="submit"></button>
                <div id="file-name-display" class="file_load" style="display:none"></div> 
            </div> 
            
        </div>
        <p class="info">My GPT Apr 27 version, un essai pour mon projet...</p>
        
    </section>


    </div>
    <script type="module" src="js/script.js"></script>
    `
  }
}


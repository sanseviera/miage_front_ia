
export default class Content{

    content(){
       
        return  ` 
        
            <div class="centerBox">
                <img class="image" src="data/campus.png" alt="Photo de la fac" class="img">
            </div>

            <div class="project">
                <div class="sizeBox">
                <h1>Détecteur de fraudes par l'IA</h1>

                <h2>Présentation</h2>

                <p>
                    Dans le cadre du cours d'introduction aux inteligences artificielles, nous avons réalisé un projet de reconnaissance de fraudes.    
                </p>
                <p>
                    Ce cours à était suivi dans le cadre du Master 1 MIAGE de l'université de Nice Sophia Antipolis, les enseignant qui nous l'ont donnée sont M.Buffa et M.Winter.
                </p>

                <h2>Objectifs</h2>
                <p>
                Le principal objectif de ce projet était de découvrir l'API d'OpenIA et d'apprendre à utiliser les diverses fonctionnalités que cette dernière offre.
                Ainsi cela a pu nous sensibiliser à l'intêret d'utiliser des intelligences artificielles au sein d'un site web.
                D'autres objectifs transversalles que nous avions était de développer nos compétences au niveau du développement web au niveau du front pour essayé
                de proposé une application reprenant des codes modernes ainsi que de nous perfectionner du côté du backend notament au niveau des API REST.
                </p>
                <div class="centerBox">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/NAO_waving.JPG/800px-NAO_waving.JPG" alt="Capture d'écran du projet" class="img">
                </div>
                
                <h2>Architecture</h2>

                <h3>Frontend</h3>
                <p>
                Le site est composé d'une page, il est chargé une seule fois par le client mais permet tout de même de naviguer entre différentes pages fictives.
                Il utilise une bibliothéque de webcomponents qui ont pour but de nous faciliter les choses lors de prochains projets, nottament avec une simplification de la création de la nav bar et du footer.
                Chaque pages est un web component ce qui nous permet d'avoir un code selon nous plus simple à utiliser du fait que chaque pages contient sont propre css et HTML.
                </p>

                <h3>Backend</h3>
                <p>
                Le site repose sur une API REST 
                </p>

                <h2>Fonctionnalités</h2>
                <ul>
                    <li>Chat bot</li>
                    <li>Détecteur de frauds</li>
                </ul>

                <h2>Collaborateurs</h2>
                <p>M. DIOP Serigne Rawane, M. BORREANI Théo</p>

                <div class="project-details">
                    <div>
                        <h3>Date de début</h3>
                        <p>05 Avril 2024</p>
                    </div>
                    <div>
                        <h3>Date de fin</h3>
                            <p>-</p>
                    </div>
                    <div>
                    <h3>Technologies</h3>
                    <p>HTML, CSS, JavaScript</p>
                </div>
            </div>
        </div>
        </div>
    
    
    
    
    
    
    
            `
    }
}


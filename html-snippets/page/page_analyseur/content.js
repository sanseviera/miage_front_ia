export default class Content {
    content() {
        return ` 
        <div class="centerBox">
            <form id="analyzeForm" method="post" enctype="multipart/form-data">
                <bt-drag-and-drop></bt-drag-and-drop>
                <textarea class="textInput" name="content" placeholder="Entrez votre texte ici..."></textarea>
                <input type="file" id="file" name="file">
                <select id="analysis_type" name="analysis_type">
                    <option value="entries">Ecritures Comptables</option>
                    <option value="statement">État Financier</option>
                    <option value="balance">Equlibre financier</option> 
                </select>
                <bt-button jsonObjectString='{"label":"Analyser"}' id="submitAnalyze"></bt-button>
            </form>
        </div>

        <div id="resultPopup" class="popup">
            <div class="popup-content">
                <span class="close">&times;</span>
                <h2>Résultat du Diagnostic</h2>
                <div id="analyzedContent"></div>
                <div id="diagnosisResult"></div>
            </div>
        </div>
        `;
    }
}

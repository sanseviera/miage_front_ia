export default class Style {
    content() {
        return `
        <style>
            :host {
                font-family: 'Arial', sans-serif;
                background-color: #f4f4f9;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .centerBox {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                background: #fff;
                padding: 20px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
                border-radius: 8px;
            }
            .analyzeForm {
                width: 100%;
                max-width: 500px;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            .textInput {
                width: 100%;
                height: 100px;
                margin: 10px -10px;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: inset 0 1px 3px rgba(0,0,0,0.12);
                font-size: 16px;
            }
            .fileInput {
                display: none;
            }
            .fileLabel {
                display: inline-block;
                padding: 10px 20px;
                background-color: #007bff;
                color: white;
                border-radius: 4px;
                cursor: pointer;
                margin: 10px 0;
                font-size: 16px;
            }
            .fileLabel:hover {
                background-color: #0056b3;
            }
            .selectInput {
                width: 100%;
                margin: 10px 0;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 4px;
                box-shadow: inset 0 1px 3px rgba(0,0,0,0.12);
                font-size: 16px;
                background-color: #f9f9f9;
                cursor: pointer;
            }
            .analyzeButton {
                margin-top: 20px;
                padding: 10px 20px;
                background-color: #28a745;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
                font-size: 16px;
                transition: background-color 0.3s;
            }
            .analyzeButton:hover {
                background-color: #218838;
            }
            .popup {
                display: none;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: auto;
                background-color: rgb(0,0,0);
                background-color: rgba(0,0,0,0.4);
            }
            .popup-content {
                background-color: #fefefe;
                margin: 15% auto;
                padding: 20px;
                border: 1px solid #888;
                width: 80%;
                max-width: 600px;
                border-radius: 8px;
                box-shadow: 0 0 10px rgba(0,0,0,0.1);
            }
            .close {
                color: #aaa;
                float: right;
                font-size: 28px;
                font-weight: bold;
            }
            .close:hover,
            .close:focus {
                color: black;
                text-decoration: none;
                cursor: pointer;
            }
            .question {
                font-weight: bold;
                color: black;
                margin-bottom: 10px;
            }
            .response {
                color: black;
                margin-bottom: 20px;
            }
        </style>
        `;
    }
}

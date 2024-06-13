export default class Style {
  content() {
      return `
      <style>
          :host {
          }
          .centerBox {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 100%;
              width: 100%;
              flex-direction: column;
          }
          .textInput {
              width: 80%;
              height: 100px;
              margin: 10px 0;
              padding: 10px;
              border: 1px solid #ccc;
              border-radius: 4px;
              box-shadow: inset 0 1px 3px rgba(0,0,0,0.12);
          }
          #file {
              margin: 10px 0;
          }
          select {
              margin: 10px 0;
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
      </style>
      `;
  }
}

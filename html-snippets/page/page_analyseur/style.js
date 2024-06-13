export default class Style{
  content(){ return `
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
    </style>
    `
  }
}
class MeuComponent extends HTMLElement {
  constructor(){
    super();
    
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = 
    `<h1>Hello World👋🏽</h1>
    <p>Isso é um component JavaScript sem framework 😃</p>
    `;
    
    const styles = document.createElement("style");
    styles.innerHTML = `
      h1{
        color: blue;
        text-align: center;
      }
      p{
        text-align: center;
      }
    `;
    
    shadow.appendChild(styles);
  }
}

customElements.define("my-component", MeuComponent);
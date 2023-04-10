class TituloDinamico extends HTMLElement {
  constructor() {
    super();
    
    const shadow = this.attachShadow({ mode: "open" });
    
    const componentRoot = document.createElement("h3");
    componentRoot.textContent = this.getAttribute("title");
    
    const styles = document.createElement("style");
    
    styles.textContent = `
      h3{
      color: red;
      text-align: center;
      text-decoration: underline;
      }
    `;
    
    shadow.appendChild(componentRoot);
    shadow.appendChild(styles);
  }
}

customElements.define("titulo-dinamico", TituloDinamico);
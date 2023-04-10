class MeuCard extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }
  
  build() {
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class", "card");
    
    const cardImg = document.createElement("img");
    cardImg.setAttribute("class", "card-img");
    cardImg.src = this.getAttribute("photo");
    
    const linkNome = document.createElement("a");
    linkNome.textContent = this.getAttribute("title");
    linkNome.href = this.getAttribute("link-url");
    
    componentRoot.appendChild(cardImg);
    componentRoot.appendChild(linkNome);

    return componentRoot;
  }
  
  styles() {
    const styles = document.createElement("style");
    styles.textContent = `
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
        padding: 10px;
        height: 120px;
        width: 100px;
        border-radius: 10px;
        background-color: ;
        box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -webkit-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
          -moz-box-shadow: 9px 9px 27px 0px rgba(0, 0, 0, 0.75);
      }
      .card-img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid #F7DD43;
        
        pointer-events: none;
        user-select: none;
        -webkit-user-select: none;
      }
      .card > a {
        margin-top: 10px;
        font-size: 15px;
        font-weight: bold;
      }
      
    `;
    
    return styles;
  }
}

customElements.define("meu-card", MeuCard);
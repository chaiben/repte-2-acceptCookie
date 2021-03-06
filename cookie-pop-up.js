class CookiePopUp extends HTMLElement {

  constructor() {
    super();

    this.shadow = this.attachShadow({mode:'open'});
    
    let showCookie = this.readCookie("show");
    this.show = showCookie === null ? 1 : parseInt(showCookie);

    this.mainText = "";
    this.description = "";
    this.buttonText = "";
    this.linkText = "";
    this.linkURL = "";
  }

  readCookie(name) {
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + name.replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  }

  connectedCallback(){
    if(!this.show)
      return;

    this.mainText = this.getAttribute("mainText") ? this.getAttribute("mainText") : "Have a Cookie";
    this.description = this.getAttribute("description") ? this.getAttribute("description") : 
      "This website uses cookies to ensure you get the best experience on our website";
    this.buttonText = this.getAttribute("buttonText") ? this.getAttribute("buttonText") : "Understood, Yum";
    this.linkText = this.getAttribute("linkText") ? this.getAttribute("linkText") : "Learn more";
    this.linkURL = this.getAttribute("linkURL") ? this.getAttribute("linkURL") : "https://support.mozilla.org/es/kb/Borrar%20cookies";

    this.render();

    let closeBtn = this.shadow.querySelector("#cookie-box--close");
    let understoodBtn = this.shadow.querySelector("#cookie-box--understood");
    
    closeBtn.addEventListener('click', ()=>this.close());
    understoodBtn.addEventListener('click', ()=>this.saveCookie())
  }

  close(){
    this.shadow.innerHTML = "";
  }

  saveCookie(){
    document.cookie="show=0";
    this.close();
  }

  render() {
    this.shadow.innerHTML = `
    <style>
      @import "./css/cookie-pop-up.min.css";
    </style>
    <div class="popup">
      <div id="cookie-box" class="cookie-box">
        <div id="cookie-box--close">
          <svg _ngcontent-wib-c42="" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-wib-c42="" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"></path></svg>
        </div>
        <img src="./assets/cookie.png" alt="Cookie image" />
        <h1>${this.mainText}</h1>
        <p>${this.description}</p>
        <div class="cookie-menu">
          <button id="cookie-box--understood">${this.buttonText}</button>
          <a
          href="${this.linkURL}" 
          target="_blank">${this.linkText}</a>
        </div>
      </div>
    </div>    
    `;
  }
}

customElements.define("cookie-pop-up", CookiePopUp);
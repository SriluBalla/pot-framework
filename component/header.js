class PotHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header>
        <link rel="stylesheet" href="${document.baseURI}css/header.css" />
        <nav class="navbar">
          <div class="navbar__container">
            <a href="${document.baseURI}index.html" class="logo">
              <img src="${document.baseURI}images/Logo.png" alt="Product Owner in Test Logo" />
            </a>
            <a href="${document.baseURI}index.html" id="navbar__logo">Product Owner in Test™</a>  
            <div class="navbar__toggle" id="mobile-menu">
              <span class="bar"></span>
              <span class="bar"></span>
              <span class="bar"></span>
            </div>
            <ul class="navbar__menu">
              <li class="navbar__item">
                <a href="${document.baseURI}pages/exp.html" class="navbar__links">Experiment</a>
              </li>
              <li class="navbar__item">
                <a href="${document.baseURI}pages/why.html" class="navbar__links">Why</a>
              </li>
              <li class="navbar__item">
                <a href="${document.baseURI}pages/qa-vs-pot.html" class="navbar__links">QA vs POT</a>
              </li>
              <li class="navbar__btn">
                <a href="${document.baseURI}pages/login.html" class="button">Sign In</a>
              </li>
              <li class="navbar__btn">
                <a href="${document.baseURI}pages/signup.html" class="button">Sign Up</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    `;

    const mobileMenu = this.querySelector('#mobile-menu');
    const navbarMenu = this.querySelector('.navbar__menu');

    mobileMenu?.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }
}

customElements.define('pot-head', PotHeader);

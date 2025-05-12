class PotFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="footer">
        <link rel="stylesheet" href="css/footer.css" />
        <div class="footer__container">
          <div class="footer__logo">
            <a href="index.html">Product Owner in Test™</a>
          </div>

          <ul class="footer__menu">
            <li class="footer__item">
            <a href="about.html" class="footer_link">About</a>
            </li>
            <li class="footer__item">
            <a href="contact.html" class="footer_link">Contact</a>
            </li>
            <li class="footer__item">
            <a href="privacy.html" class="footer_link">Privacy</a>
            </li>
            </ul>
          </div>
          <div class="footer__credit">
            <p>&copy; 2025 Srilu Balla. All rights reserved.</p>
          </div>
        </div>
      </footer>
    `;

    // Move script logic into here so it runs
    const mobileMenu = this.querySelector('#mobile-menu');
    const navbarMenu = this.querySelector('.navbar__menu');

    mobileMenu?.addEventListener('click', () => {
      navbarMenu.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });
  }
}

// Register the custom element
customElements.define('pot-foot', PotFooter);

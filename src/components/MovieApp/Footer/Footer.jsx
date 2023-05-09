import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-container">
        <p>Questions? Call 1-844-505-2993</p>
        <div className="flex-row">
          <ul className="flex-column">
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Cookie Preferences</a>
            </li>
          </ul>
          <ul className="flex-column">
            <li>
              <a>Help Center</a>
            </li>
            <li>
              <a>Corporate Information</a>
            </li>
          </ul>
          <ul className="flex-column">
            <li>
              <a>Terms of Use</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
          </ul>
          <div className="flex-row social-icons">
            <ion-icon name="logo-facebook"></ion-icon>
            <ion-icon name="logo-instagram"></ion-icon>
            <ion-icon name="logo-twitter"></ion-icon>
            <ion-icon name="logo-youtube"></ion-icon>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

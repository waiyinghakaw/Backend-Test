import {IonIcon} from '@ionic/react'
import "./header.css"

function Header() {
  return (
    <div className="header">
      <header>
        <div class="header-top">
          <div class="container">
            <ul class="header-social-container">
              <li>
                <a href="/#" class="social-link">
                  <IonIcon name="logo-facebook"></IonIcon>
                </a>
              </li>

              <li>
                <a href="/#" class="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/#" class="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>

              <li>
                <a href="/#" class="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
            </ul>

            <div class="header-alert-news">
              <p>
                <b>10% Discount</b>
                Use code 'localize' for discounts on your bookings
              </p>
            </div>

            <div class="header-top-actions">
              <select name="currency">
                <option value="php">PHP &#8369;</option>
                <option value="usd">USD &dollar;</option>
              </select>

              <select name="language">
                <option value="en-US">English</option>
                <option value="fil">Filipino</option>
              </select>
            </div>
          </div>
        </div>

        <div class="header-main">
          <div class="container">
            <a href="/#" class="header-logo">
              <img
                src="/assets/images/logo/localize_logo.png"
                alt="Localize Logo"
                width="150"
                height="30"
              />
            </a>

            <div class="header-search-container">

            </div>

            <div class="header-user-actions">

            </div>
          </div>
        </div>

        <nav class="desktop-navigation-menu">
          <div class="container">
            <ul class="desktop-menu-category-list">
              <li class="menu-category">
              </li>
            </ul>
          </div>
        </nav>
        <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
      <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
      </header>
    </div>

  )
}

export default Header
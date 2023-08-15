import logo from "../../assets/logo/logowhite.svg";
import iconBasket from "../../assets/icons/backet.svg";
import iconProfile from "../../assets/icons/profile.svg";

const getHeader = () => {
  const code:string = `
  <div class="overlay none"></div>
<header class="header">
    <div class="header-container">
      <div class="burger">
        <div class="burger-line"></div>
        <div class="burger-line"></div>
        <div class="burger-line"></div>
      </div>
      <img src=${logo} class="header-logo" alt="logo">
      <nav class="header-nav">
        <ul class="header-list">
          <li><a href="/">MAIN</a></li>
          <li><a href="/catalog">CATALOG</a>
          </li>
          <li><a href="#">BRANDS</a>
          </li>
          <li><a href="#">FACE</a>
          </li>
          <li><a href="#">BODY</a>
          </li>
          <li><a href="#">HAIR</a>
          </li>
          <li><a href="#">SALE</a></li>
          <li><a href="/about us">ABOUT US</a></li>
        </ul>
        <div class="header-profile">
          <div class="header-buttons">
            <div class="logInButton header-button">Log In</div>
            <div class="signUpButton header-button">Sign Up</div>
            <div class="profile"><a href="#"><img src=${iconProfile} width="30px"
                  height="30px" title="Profile" alt="profile" class="icon"></a></div>
          </div>
        </div>
      </nav>
      <div class="basket">
        <a href="#">
          <img src=${iconBasket} width="30px" height="30px" title="Basket" alt="basket"
            class="icon">
        </a>
        <span class="basket-count">0</span>
      </div>
    </div>

  </header>


  `;
  return code;
};

export default getHeader;

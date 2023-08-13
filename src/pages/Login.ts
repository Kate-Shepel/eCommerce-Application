const renderLoginForm = () => {
  const view = `
    <div class="form-container form-login-container">
      <div class="form-login-content">
        <div class="form-img">
          <div class="form-image-login"></div>
          <div class="form-img-text form-img-text-login">Warm welcome to our website.  <br> Such a pleasure to see you again!</div>
        </div>
      </div>
      <div class="form-data form-login-data">
        <form class="login-form">
          <h3 class="form-header">Login</h3>
          <div class="form-row">
            <div class="form-input">
              <label for="email" class="required">Email</label>
              <input type="email" name="email" id="email" autocomplete="email" required>
            </div>
          </div>
          <div class="form-row">
            <div class="form-input">
              <label for="password" class="required">Password</label>
              <input type="password" name="password" id="password" autocomplete="current-password" required>
              <span class="btn-show-pass">
                <i class="fa-regular fa-eye-slash"></i>
              </span>
            </div>
          </div>
          <button type="submit" class="form-button">Login</button>
          <p class="registration-doublecheck">Dont't have an account? <br> <a href="#" class="registration-link">Sign Up</a></p>
        </form>
      </div>
    </div>
  `;
  return view;
};

const insertLoginFormIntoMain = () => {
  const main = document.querySelector("main");
  if (main) {
    main.innerHTML = renderLoginForm();
  } else {
    console.error("<main> element not found!");
  }
};

export default insertLoginFormIntoMain;

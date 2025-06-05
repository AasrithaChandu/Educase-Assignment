const app = document.getElementById("app");
        let page = "welcome";

        function render() {
            app.innerHTML = "";

            const backBtn = page !== "welcome" ? `<button class='back-btn' onclick='goBack()'>←</button>` : "";

            if (page === "welcome") {
                app.innerHTML = `
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
      <button class='btn' onclick='page="create"; render()'>Create Account</button>
      <div class='link' onclick='page="login"; render()'>Already Registered? Login</div>
    `;
            } else if (page === "create") {
                app.innerHTML = `
      ${backBtn}
      <h2>Create your<br />PopX account</h2>
      <form onsubmit='createAccount(event)'>
        <label>Full Name*</label>
        <input type='text' required placeholder='Enter full name' />
        <label>Phone number*</label>
        <input type='tel' required placeholder='Enter phone number' />
        <label>Email address*</label>
        <input type='email' required placeholder='Enter your email' />
        <label>Password*</label>
        <input type='password' required placeholder='Enter password' />
        <label>Company name</label>
        <input type='text' placeholder='Enter company name' />
        <label>Are you an Agency?*</label>
        <select required><option value=''>Select</option><option value='yes'>Yes</option><option value='no'>No</option></select>
        <button type='submit' class='btn'>Create Account</button>
      </form>
    `;
            } else if (page === "login") {
                app.innerHTML = `
      ${backBtn}
      <h2>Sign in to your<br />PopX account</h2>
      <p>Lorem ipsum dolor sit amet,<br />consectetur adipisicing elit.</p>
      <form onsubmit='login(event)'>
        <label>Email Address</label>
        <input type='email' required placeholder='Enter email address' />
        <label>Password</label>
        <input type='password' required placeholder='Enter password' />
        <button type='submit' class='btn'>Login</button>
      </form>
    `;
            } else if (page === "account") {
                app.innerHTML = `
      ${backBtn}
      <h2>Account Settings</h2>
      <div class='profile-title'>Profile</div>
      <div class='profile-header'>
        <div class='profile-img-wrapper'>
          <img src='https://i.pravatar.cc/100?img=47' alt='Profile' class='profile-pic' />
          <div class='camera-icon'>📷</div>
        </div>
        <div>
          <div class='profile-name'>Marry Doe</div>
          <div class='profile-email'>Marry@Gmail.Com</div>
        </div>
      </div>
      <p class='description'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>
    `;
            }
        }

        function goBack() {
            page = "welcome";
            render();
        }

        function createAccount(e) {
            e.preventDefault();
            page = "account";
            render();
        }

        function login(e) {
            e.preventDefault();
            page = "account";
            render();
        }

        render();

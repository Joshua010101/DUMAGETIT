document.addEventListener("DOMContentLoaded", function () {
    // Handle Login
    function handleLogin(event) {
        event.preventDefault(); // Prevent default form submission
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;

        const accounts = JSON.parse(localStorage.getItem("accounts")) || [];
        const user = accounts.find(
            (acc) => acc.username === username && acc.password === password
        );

        if (user) {
            sessionStorage.setItem("loggedInUser", username);
            alert("Login successful!");
            window.location.href = "home-page.html";
        } else {
            alert("Invalid username or password! Please try again.");
        }
    }

    // Handle Sign Up
    function handleSignUp(event) {
        event.preventDefault(); // Prevent default form submission
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;

        if (username && email && password) {
            const accounts = JSON.parse(localStorage.getItem("accounts")) || [];

            if (accounts.some((acc) => acc.username === username)) {
                alert("Username already exists. Please choose a different one.");
                return;
            }

            accounts.push({ username, email, password });
            localStorage.setItem("accounts", JSON.stringify(accounts));

            alert("Account created successfully! You can now log in.");
            window.location.href = "login-page.html"; // Redirect to login page
        } else {
            alert("Please fill out all required fields.");
        }
    }

    // Assign event listeners
    const loginButton = document.querySelector(".login-button");
    if (loginButton) {
        loginButton.addEventListener("click", handleLogin);
    }

    const signUpButton = document.querySelector(".signup-button");
    if (signUpButton) {
        signUpButton.addEventListener("click", handleSignUp);
    }

<<<<<<< HEAD
    
=======
    // Display logged-in username in navbar (if applicable)
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    const userNameDisplay = document.getElementById("user-name");
    const userNameDisplay2 = document.querySelector(".user-modal-text");
    if (loggedInUser && userNameDisplay) {
        userNameDisplay.textContent = loggedInUser;
        userNameDisplay2.textContent = loggedInUser;
    }

});
>>>>>>> b54a18984e6769feaac7d50df0d35ebf8b6a6b8b



document.addEventListener('DOMContentLoaded', function() {
    
    const window = document.querySelector('.window');
    const openModal = document.querySelector('.terms-condition');
    const closeModal = document.querySelector('.close-btn');
    const modalCheckbox = document.getElementById('modal-checkbox');
    const termsconditionCheckbox = document.getElementById('terms-condition-checkbox');
    const acceptButton = document.querySelector('.accept-button');

    openModal.addEventListener('click', (e) => {
        e.preventDefault();
        window.style.visibility = 'visible';
    });

    closeModal.addEventListener('click', () => {
        window.style.visibility = 'hidden';
    });

    window.addEventListener('click', (e) => {
        if (e.target === window) {
            window.style.visibility = 'hidden';
        }
    });

    modalCheckbox.addEventListener('change', () => {
        termsconditionCheckbox.checked = modalCheckbox.checked;
    });

    termsconditionCheckbox.addEventListener('change', () => {
        modalCheckbox.checked = termsconditionCheckbox.checked;
    });

    acceptButton.addEventListener('click', () => {
        event.preventDefault();
        window.style.visibility = 'hidden';
    });


});

<<<<<<< HEAD
});
=======
document.addEventListener('click', (e) => {
    toggleShowPassword();
})

function toggleShowPassword() {
    const visibleIcon = document.getElementById('visible-icon');
    const password = document.getElementById('password');

    if (event.target === visibleIcon) {
        if (password.type === 'password') {
            password.type = 'text';
            visibleIcon.src = '../Elements/hidden.png';
        } else {
            password.type = 'password';
            visibleIcon.style.display = 'visible';
            visibleIcon.src = '../Elements/visible.png';
        }    
    }
    
}

>>>>>>> b54a18984e6769feaac7d50df0d35ebf8b6a6b8b

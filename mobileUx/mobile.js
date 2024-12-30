
document.getElementById("visible-icon").addEventListener("click", function() {
    var passwordField = document.getElementById("password");
    var passwordIcon = document.getElementById("visible-icon");

    
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordIcon.src = "../Elements/visible.png";
        passwordIcon.alt = "visible icon";
    }
    else {
        passwordField.type = "password";
        passwordIcon.src = "../Elements/hidden.png";
        passwordIcon.alt = "hidden icon";
    }
});


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




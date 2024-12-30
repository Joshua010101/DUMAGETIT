document.addEventListener('DOMContentLoaded', function (){
    homePage ();
}) 

function homePage () {

    const openModalMenu = document.querySelector('.user-menu-container');
    const windowHome = document.querySelector('.window-home-page');
    const signoutButton = document.getElementById('signout-button');


    openModalMenu.addEventListener('click', (e) => {
        e.preventDefault();
        windowHome.style.visibility = 'visible';
    }) 

    windowHome.addEventListener('click', (e) => {
        if (e.target === windowHome) {
            windowHome.style.visibility = 'hidden';
        }
    })

    signoutButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'login-signup-page.html';
    })

    postModal ();
}


function postModal () {
    const openPostModal = document.getElementById('post');
    const windowPostModal = document.querySelector('.window-post-modal');
    const closePostModal = document.getElementById('modalpost-back-arrow');
    const buttonPostModal = document.getElementById('next-button');
    const textarea = document.getElementById('post-modal');
    const inputField = document.querySelector('.post-here');
    
    openPostModal.addEventListener('click', (e) => {
        e.preventDefault();
        windowPostModal.style.visibility = 'visible';
    })

    windowPostModal.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === windowPostModal) {
            windowPostModal.style.visibility = 'hidden';
        }
    })

    closePostModal.addEventListener('click', (e) => {
        e.preventDefault();
        windowPostModal.style.visibility = 'hidden';
    })

    buttonPostModal.addEventListener('click', (e) => {

        const typeText = textarea.value;
        inputField.value = typeText
        inputField.placeholder = typeText
        e.preventDefault();
        windowPostModal.style.visibility = 'hidden';
    })
}



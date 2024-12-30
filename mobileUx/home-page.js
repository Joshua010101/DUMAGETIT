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

}



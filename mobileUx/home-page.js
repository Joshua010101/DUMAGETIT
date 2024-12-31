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


document.addEventListener('DOMContentLoaded', () => {
    openSection();
})

function openSection () {
    const foodBtn = document.querySelector('.food');
    const hotelBtn = document.querySelector('.hotel');
    const touristBtn = document.querySelector('.tourist-spot');
    const souvenirBtn= document.querySelector('.souvenir');
    const contactBtn = document.querySelector('.contact');
    const foodPage = document.querySelector('.food-section');
    const hotelPage = document.querySelector('.hotel-section');    
    const touristPage = document.querySelector('.tourist-spot-section');
    const souvenirPage = document.querySelector('.souvenirs-section');
    const contactPage = document.querySelector('.contact-section');

    foodBtn.addEventListener('click', () => {
        foodPage.style.backgroundColor = 'black';
    })

    hotelPage.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'hotel-page.html';
    })

    touristPage.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'tourist-spot-page.html';
    })

    souvenirPage.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'souvenir-page.html';
    })

    contactPage.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'contact-page.html';
    })   

}


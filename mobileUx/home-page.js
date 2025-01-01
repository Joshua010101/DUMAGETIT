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

    openContent ();
}



    


function openContent () {
    const content1 = document.querySelector('.content-1');
    const content2 = document.querySelector('.content-2');
    const content3 = document.querySelector('.content-3');
    const content4 = document.querySelector('.content-4');
    const content5 = document.querySelector('.content-5');
    const content6 = document.querySelector('.content-6');
    const content7 = document.querySelector('.content-7');
    const content8 = document.querySelector('.content-8');
    const content9 = document.querySelector('.content-9');
    const descriptionContainer1 = document.querySelector('.description-container-1');
    const descriptionContainer2 = document.querySelector('.description-container-2');
    const descriptionContainer3 = document.querySelector('.description-container-3');
    const descriptionContainer4 = document.querySelector('.description-container-4');
    const descriptionContainer5 = document.querySelector('.description-container-5');
    const descriptionContainer6 = document.querySelector('.description-container-6');
    const descriptionContainer7 = document.querySelector('.description-container-7');
    const descriptionContainer8 = document.querySelector('.description-container-8');   
    const descriptionContainer9 = document.querySelector('.description-container-9');
    const contentBase1 = document.querySelector('.content-base-1');
    const contentBase2 = document.querySelector('.content-base-2');
    const contentBase3 = document.querySelector('.content-base-3');
    const contentBase4 = document.querySelector('.content-base-4');
    const contentBase5 = document.querySelector('.content-base-5');
    const contentBase6 = document.querySelector('.content-base-6');
    const contentBase7 = document.querySelector('.content-base-7');
    const contentBase8 = document.querySelector('.content-base-8');
    const contentBase9 = document.querySelector('.content-base-9');

/*---------content 1----------*/   

    content1.addEventListener('click', () => {

        contentBase1.classList.add('expanded');
        content1.classList.add('expanded');
        descriptionContainer1.classList.add('expanded')
                
        if (content1.classList.contains('expanded')) {
            contentBase1.classList.add('expanded');
            content1.classList.add('expanded');                descriptionContainer1.classList.add('expanded')
            }
    })



    window.addEventListener('scroll', () => {
                if (contentBase1.classList.contains('expanded')) {
                    contentBase1.classList.remove('expanded');
                    content1.classList.remove('expanded');
                    descriptionContainer1.classList.remove('expanded');
                    descriptionContainer1.scrollTop = 0;
                }
            
/*-----------------------------*/  

/*---------content 2----------*/  
        
    })

    content2.addEventListener('click', () => {

        contentBase2.classList.add('expanded');
        content2.classList.add('expanded');
        descriptionContainer2.classList.add('expanded')
        
        if (content2.classList.contains('expanded')) {
            contentBase2.classList.add('expanded');
            content2.classList.add('expanded');
            descriptionContainer2.classList.add('expanded')
            }
    })



    window.addEventListener('scroll', () => {
        if (contentBase2.classList.contains('expanded') ) {
            contentBase2.classList.remove('expanded');
            content2.classList.remove('expanded');
            descriptionContainer2.classList.remove('expanded');
            descriptionContainer2.scrollTop = 0;
        }
    })

/*--------------------------*/

/*---------content 3----------*/

content3.addEventListener('click', () => {

    contentBase3.classList.add('expanded');
    content3.classList.add('expanded');
    descriptionContainer3.classList.add('expanded')
    
    if (content3.classList.contains('expanded')) {
        contentBase3.classList.add('expanded');
        content3.classList.add('expanded');
        descriptionContainer3.classList.add('expanded')
        }
})



window.addEventListener('scroll', () => {
    if (contentBase3.classList.contains('expanded') ) {
        contentBase3.classList.remove('expanded');
        content3.classList.remove('expanded');
        descriptionContainer3.classList.remove('expanded');
        descriptionContainer3.scrollTop = 0;
    }
})


/*----------------------------*/  

/*---------content 4----------*/

content4.addEventListener('click', () => {

    contentBase4.classList.add('expanded');
    content4.classList.add('expanded');
    descriptionContainer4.classList.add('expanded')
    
    if (content4.classList.contains('expanded')) {
        contentBase4.classList.add('expanded');
        content4.classList.add('expanded');
        descriptionContainer4.classList.add('expanded')
        }
})



window.addEventListener('scroll', () => {
    if (contentBase4.classList.contains('expanded') ) {
        contentBase4.classList.remove('expanded');
        content4.classList.remove('expanded');
        descriptionContainer4.classList.remove('expanded');
        descriptionContainer4.scrollTop = 0;
    }
})

/*----------------------------*/

/*---------content 5----------*/
content5.addEventListener('click', () => {

    contentBase5.classList.add('expanded');
    content5.classList.add('expanded');
    descriptionContainer5.classList.add('expanded')
    
    if (content5.classList.contains('expanded')) {
        contentBase5.classList.add('expanded');
        content5.classList.add('expanded');
        descriptionContainer5.classList.add('expanded')
        }
})



window.addEventListener('scroll', () => {
    if (contentBase5.classList.contains('expanded') ) {
        contentBase5.classList.remove('expanded');
        content5.classList.remove('expanded');
        descriptionContainer5.classList.remove('expanded');
        descriptionContainer5.scrollTop = 0;
    }
})

/*----------------------------*/

/*---------content 6----------*/

content6.addEventListener('click', () => {

    contentBase6.classList.add('expanded');
    content6.classList.add('expanded');
    descriptionContainer6.classList.add('expanded')

    const sectionContainer = document.querySelector('.section-container');
    const content = document.querySelector('content')
    
    if (content6.classList.contains('expanded')) {
        contentBase6.classList.add('expanded');
        content6.classList.add('expanded');
        descriptionContainer6.classList.add('expanded')
        sectionContainer.classList.add('expanded');
        content.classList.add('expanded');
        }
})


window.addEventListener('scroll', () => {
    if (contentBase6.classList.contains('expanded') ) {
        contentBase6.classList.remove('expanded');
        content6.classList.remove('expanded');
        descriptionContainer6.classList.remove('expanded');
        descriptionContainer6.scrollTop = 0;
    }
})

/*----------------------------*/

/*---------content 7---------- */

content7.addEventListener('click', () => {

    contentBase7.classList.add('expanded');
    content7.classList.add('expanded');
    descriptionContainer7.classList.add('expanded')

    const sectionContainer = document.querySelector('.section-container');
    const content = document.querySelector('content')
    
    if (content7.classList.contains('expanded')) {
        contentBase7.classList.add('expanded');
        content7.classList.add('expanded');
        descriptionContainer7.classList.add('expanded')
        sectionContainer.classList.add('expanded');
        content.classList.add('expanded');
        }
})


window.addEventListener('scroll', () => {
    if (contentBase7.classList.contains('expanded') ) {
        contentBase7.classList.remove('expanded');
        content7.classList.remove('expanded');
        descriptionContainer7.classList.remove('expanded');
        descriptionContainer7.scrollTop = 0;
    }
})

/*----------------------------*/

/*---------content 8----------*/

content8.addEventListener('click', () => {

    contentBase8.classList.add('expanded');
    content8.classList.add('expanded');
    descriptionContainer8.classList.add('expanded')

    const sectionContainer = document.querySelector('.section-container');
    const content = document.querySelector('content')
    
    if (content8.classList.contains('expanded')) {
        contentBase8.classList.add('expanded');
        content8.classList.add('expanded');
        descriptionContainer8.classList.add('expanded')
        sectionContainer.classList.add('expanded');
        content.classList.add('expanded');
        }
})


window.addEventListener('scroll', () => {
    if (contentBase8.classList.contains('expanded') ) {
        contentBase8.classList.remove('expanded');
        content8.classList.remove('expanded');
        descriptionContainer8.classList.remove('expanded');
        descriptionContainer8.scrollTop = 0;
    }
})

/*----------------------------*/

/*---------content 9----------*/

content9.addEventListener('click', () => {

    contentBase9.classList.add('expanded');
    content9.classList.add('expanded');
    descriptionContainer9.classList.add('expanded')

    const sectionContainer = document.querySelector('.section-container');
    const content = document.querySelector('content')
    
    if (content9.classList.contains('expanded')) {
        contentBase9.classList.add('expanded');
        content9.classList.add('expanded');
        descriptionContainer9.classList.add('expanded')
        sectionContainer.classList.add('expanded');
        content.classList.add('expanded');
        }
})


window.addEventListener('scroll', () => {
    if (contentBase9.classList.contains('expanded') ) {
        contentBase9.classList.remove('expanded');
        content9.classList.remove('expanded');
        descriptionContainer9.classList.remove('expanded');
        descriptionContainer9.scrollTop = 0;
    }
})

/*----------------------------*/

}



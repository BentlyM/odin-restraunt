import logo from './logo.png';

function logoComponent() {
    const logoContainer = document.querySelector('#logo');
    const NavContent = document.querySelector('.nav');
 
    const myLogo = new Image(45 , 45);
    myLogo.src = logo;



    logoContainer.appendChild(myLogo);
 
    return {
        logoContainer,
        NavContent
    };
}

logoComponent();
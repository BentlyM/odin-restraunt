import './style.css';
import { Init } from './init';


function component() {
    // this is for switching between 'pages' tho its static
     // possible put each of these in a if statement?
    const switchPage = new Init();

    switchPage.loadHome();
    switchPage.loadMenu();
    switchPage.loadAbout();
    
}

component();

// create a a javascript init.js file to render when button clicked menu or about or home
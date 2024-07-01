
// responsible for creating and appending content to file (NOTHING ELSE);
import { HomeComponent } from "./homeLayout";

export class Init {
    constructor(){
        /* calling on the  variable that called back on the component */
        this.contentContainer = document.getElementById('content');
    }

    loadHome(){
        // exportedVariable.addEventListener that calls back on the function
        // if another button pressed then render that page possible with a switch statement
        HomeComponent().homeBtn.addEventListener('click', HomeComponent);
        this.contentContainer.appendChild(HomeComponent().homeLayout)
    }
}
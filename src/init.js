
// responsible for creating and appending content to file (NOTHING ELSE);
import { HomeComponent } from "./homeLayout";
import { MenuComponent } from "./menuLayout";
import { AboutComponent } from "./aboutLayout";

export class Init {
    constructor(){
        this.contentContainer = document.getElementById('content');
    }

    loadHome(){
        HomeComponent().homeBtn.addEventListener('click', HomeComponent);
        this.contentContainer.appendChild(HomeComponent().homeLayout)
    }

    loadMenu(){
        MenuComponent().menuBtn.addEventListener('click', MenuComponent);
        this.contentContainer.appendChild(MenuComponent().menuLayout)
    }

    loadAbout(){
        AboutComponent().aboutBtn.addEventListener('click', AboutComponent);
        this.contentContainer.appendChild(AboutComponent().aboutLayout);
    }
}
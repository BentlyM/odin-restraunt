
// responsible for creating and appending content to file (NOTHING ELSE);
import { HomeComponent } from "./homeLayout";
import { MenuComponent } from "./menuLayout";
import { AboutComponent } from "./aboutLayout";

export class Init {
    constructor(){
        this.choice = document.querySelectorAll('li');
        this.contentContainer = document.getElementById('content');
    }

    load(){
        this.contentContainer.appendChild(HomeComponent().homeLayout);

        for(let list of this.choice){
            list.addEventListener('click',(event)=>{
                if(event.target.innerText === 'About'){
                    AboutComponent().aboutBtn.addEventListener('click', AboutComponent);
                   this.contentContainer.replaceChild(AboutComponent().aboutLayout, this.contentContainer.childNodes[0]);
                }else if(event.target.innerText === 'Menu'){
                    MenuComponent().menuBtn.addEventListener('click', MenuComponent);
                    this.contentContainer.replaceChild(HomeComponent().homeLayout, this.contentContainer.childNodes[0]);
                }else{
                    HomeComponent().homeBtn.addEventListener('click', HomeComponent);
                    this.contentContainer.replaceChild(MenuComponent().menuLayout, this.contentContainer.childNodes[0]);

                }
            })
        }
    }

}
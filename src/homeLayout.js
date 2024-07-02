import restaurantImage from './homeImage.png'

export const HomeComponent = () => {
    const homeBtn = document.querySelector('.home')

    const homeLayout = document.createElement('div');
    homeLayout.classList.add('homeContainer');

    /*title*/
    const title = document.createElement('h3');
    title.textContent = 'Welcome to Shadows Kitchen';
    title.style.textAlign = 'center';

    /*img*/
    const mainImg = new Image(500 , 500);
    mainImg.src = restaurantImage;

    /*paragraph*/
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Anyone who gets in my way is my enemy! Our pastries are so good, it will make you forget about those other wannabe restaurants. Chaos Control your taste buds to the best pastries they have ever had.'
    paragraph.style.textAlign = 'center';
    paragraph.style.width = "500px";

    homeLayout.appendChild(title);
    homeLayout.appendChild(mainImg);
    homeLayout.appendChild(paragraph);

    return {
        homeBtn,
        homeLayout
    }
}
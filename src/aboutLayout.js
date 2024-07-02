import aboutImage from './aboutImage.png'

export const AboutComponent = () => {
    const aboutBtn = document.querySelector('.about')

    const aboutLayout = document.createElement('div');
    aboutLayout.classList.add('aboutContainer');

    /* title */
    const aboutTitle = document.createElement('h3');
    aboutTitle.textContent = 'About Us';
    aboutTitle.style.textAlign = 'center';

    /* paragraph */
    const aboutParagraph = document.createElement('p');
    aboutParagraph.textContent = 'Shadows Kitchen is a restaurant like no other. Our chefs are trained in the art of culinary chaos, and our dishes are designed to blow your mind. Learn more about our story and mission.';
    aboutParagraph.style.textAlign = 'center';
    aboutParagraph.style.width = "500px";

    /* image */
    const aboutImg = new Image(300, 400);
    aboutImg.src = aboutImage;
    aboutImg.style.display = 'block';
    aboutImg.style.margin = '0 auto';

    aboutLayout.appendChild(aboutTitle);
    aboutLayout.appendChild(aboutImg);
    aboutLayout.appendChild(aboutParagraph);

    return {
        aboutBtn,
        aboutLayout
        // this should contain the html/css layout 
    }
}


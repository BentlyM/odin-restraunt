export const AboutComponent = () => {
    const aboutBtn = document.querySelector('.about')

    const aboutLayout = document.createElement('div');
    aboutLayout.classList.add('aboutContainer');

    const text = document.createElement('span');
    text.textContent = 'AboutLayout';

    aboutLayout.appendChild(text);

    return {
        aboutBtn,
        aboutLayout
        // this should contain the html/css layout 
    }
}


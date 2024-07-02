export const MenuComponent = () => {
    const menuBtn = document.querySelector('.menu')

    const menuLayout = document.createElement('div');
    menuLayout.classList.add('menuContainer');

    const text = document.createElement('span');
    text.textContent = 'MenuLayout';
    
    menuLayout.appendChild(text);

    return {
        menuBtn,
        menuLayout
        // this should contain the html/css layout 
    }
}
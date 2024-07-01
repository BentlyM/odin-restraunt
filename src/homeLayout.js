export const HomeComponent = () => {
    const homeBtn = document.getElementById('home')

    const homeLayout = document.createElement('div');
    homeLayout.classList.add('homeContainer');

    const text = document.createElement('span');
    text.textContent = 'Home Layout';
    

    homeLayout.appendChild(text);

    return {
        homeBtn,
        homeLayout
        // this should contain the html/css layout 
    }
}
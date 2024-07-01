export const menuComponent = () => {
    console.log('you reached me');
    const homeBtn = document.getElementById('menu')

    const homeLayout = document.createElement('div');
    homeLayout.classList.add('homeContainer');

    const text = document.createElement('span');
    text.textContent = 'test1';
    

    homeLayout.appendChild(text);

    return {
        homeBtn,
        homeLayout
        // this should contain the html/css layout 
    }
}
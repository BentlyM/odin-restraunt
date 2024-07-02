export const HomeComponent = () => {
    const homeBtn = document.querySelector('.home')

    const homeLayout = document.createElement('div');
    homeLayout.classList.add('homeContainer');

    


    return {
        homeBtn,
        homeLayout
        // this should contain the html/css layout 
    }
}
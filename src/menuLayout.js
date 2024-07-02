export const MenuComponent = () => {
    const menuBtn = document.querySelector('.menu')

    const menuLayout = document.createElement('div');
    menuLayout.classList.add('menuContainer');

    /* title */
    const menuTitle = document.createElement('h2');
    menuTitle.textContent = 'Shadow\'s Pastry Palace';
    menuTitle.style.textAlign = 'center';
    menuTitle.style.fontFamily = 'Arial Black';
    menuTitle.style.color = '#333';
    menuTitle.style.textShadow = '2px 2px #666';

    /* menu categories */
    const menuCategories = [
    { name: 'Chaos Treats', icon: '🍰' },
    { name: 'Fruit Frenzy', icon: '🍓' },
    { name: 'Creamy Delights', icon: '🥛' },
    { name: 'Chocolate Chaos', icon: '🍫' },
    { name: 'Shadow\'s Favorites', icon: '❤️' },
    ];

    const menuCategoryList = document.createElement('ul');
    menuCategoryList.style.listStyle = 'none';
    menuCategoryList.style.padding = '0';
    menuCategoryList.style.margin = '0';
    menuCategoryList.style.display = 'flex';
    menuCategoryList.style.flexWrap = 'wrap';
    menuCategoryList.style.justifyContent = 'center';

    menuCategories.forEach((category) => {
    const categoryListItem = document.createElement('li');
    categoryListItem.style.margin = '10px';
    categoryListItem.style.cursor = 'pointer';

    const categoryIcon = document.createElement('span');
    categoryIcon.textContent = category.icon;
    categoryIcon.style.fontSize = '24px';
    categoryIcon.style.marginRight = '10px';

    const categoryName = document.createElement('span');
    categoryName.textContent = category.name;
    categoryName.style.fontSize = '18px';
    categoryName.style.fontWeight = 'bold';

    categoryListItem.appendChild(categoryIcon);
    categoryListItem.appendChild(categoryName);
    menuCategoryList.appendChild(categoryListItem);
    });

    /* menu items */
    const menuItems = [
    {
        name: 'Shadow\'s Signature Croissant',
        description: 'Flaky, buttery, and utterly divine',
        price: '$4.99',
        category: 'Sweet Treats',
    },
    {
        name: 'Strawberry Shortcake',
        description: 'Fresh strawberries and whipped cream on a bed of sweet biscuits',
        price: '$6.99',
        category: 'Fruit Frenzy',
    },
    {
        name: 'Cream Puff Delight',
        description: 'Light and airy cream puffs filled with a sweet surprise',
        price: '$5.99',
        category: 'Creamy Delights',
    },
    {
        name: 'Chocolate Éclair',
        description: 'Rich, velvety chocolate and a delicate pastry crust',
        price: '$7.99',
        category: 'Chocolate Chaos',
    },
    {
        name: 'Shadow\'s Favorite Fruit Tart',
        description: 'A sweet and tangy mix of fresh fruits on a buttery crust',
        price: '$8.99',
        category: 'Shadow\'s Favorites',
    },
    // add more menu items here
    ];

    const menuItemList = document.createElement('ul');
    menuItemList.style.listStyle = 'none';
    menuItemList.style.padding = '0';
    menuItemList.style.margin = '0';

    menuItems.forEach((menuItem) => {
    const menuItemListItem = document.createElement('li');
    menuItemListItem.style.marginBottom = '20px';

    const menuItemName = document.createElement('h3');
    menuItemName.textContent = menuItem.name;
    menuItemName.style.fontSize = '18px';
    menuItemName.style.fontWeight = 'bold';

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = menuItem.description;
    menuItemDescription.style.fontSize = '14px';
    menuItemDescription.style.color = '#666';

    const menuItemPrice = document.createElement('p');
    menuItemPrice.textContent = `Price: ${menuItem.price}`;
    menuItemPrice.style.fontSize = '14px';
    menuItemPrice.style.color = '#666';

    const menuItemCategory = document.createElement('p');
    menuItemCategory.textContent = `Category: ${menuItem.category}`;
    menuItemCategory.style.fontSize = '14px';
    menuItemCategory.style.color = '#666';

    menuItemListItem.appendChild(menuItemName);
    menuItemListItem.appendChild(menuItemDescription);
    menuItemListItem.appendChild(menuItemPrice);
    menuItemListItem.appendChild(menuItemCategory);
    menuItemList.appendChild(menuItemListItem);
    });

    menuLayout.appendChild(menuTitle);
    menuLayout.appendChild(menuCategoryList);
    menuLayout.appendChild(menuItemList);

    return {
        menuBtn,
        menuLayout
        // this should contain the html/css layout 
    }
}
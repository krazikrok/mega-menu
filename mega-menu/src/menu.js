export function createMenu(container, menuData) {
    container.innerHTML = '';
    menuData.forEach(item => {
        const menuItem = document.createElement('li');
        const menuLink = document.createElement('a');
        menuLink.textContent = item.title;
        menuLink.href = '#';
        menuItem.appendChild(menuLink);

        if (item.children) {
            const submenu = document.createElement('ul');
            submenu.classList.add('submenu');
            createMenu(submenu, item.children);
            menuItem.appendChild(submenu);

            menuLink.addEventListener('click', (event) => {
                event.preventDefault();
                const submenus = container.querySelectorAll('.submenu-active');
                submenus.forEach(sub => sub.classList.remove('submenu-active'));
                submenu.classList.add('submenu-active');
            });
        }

        container.appendChild(menuItem);
    });
}

import { createMenu } from './menu';

document.addEventListener('DOMContentLoaded', () => {
    const menuData = [
        {
            title: 'Item 1',
            children: [
                {
                    title: 'Subitem 1-1',
                    children: [
                        { title: 'Subsubitem 1-1-1' },
                        { title: 'Subsubitem 1-1-2' }
                    ]
                },
                { title: 'Subitem 1-2' }
            ]
        },
        {
            title: 'Item 2',
            children: [
                { title: 'Subitem 2-1' },
                { title: 'Subitem 2-2' }
            ]
        },
        { title: 'Item 3' }
    ];

    const megaMenu = document.getElementById('mega-menu');
    createMenu(megaMenu, menuData);
});

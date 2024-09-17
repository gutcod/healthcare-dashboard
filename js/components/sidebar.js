export function initializeSidebar() {
    const menuItems = document.querySelectorAll('.sidebar .menu li a');

    menuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            menuItems.forEach(i => i.parentElement.classList.remove('active'));
            item.parentElement.classList.add('active');
            // TODO: Add logic here to change the main content based on the clicked item
        });
    });
}
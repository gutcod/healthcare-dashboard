export function initializeNavbar() {
    const searchInput = document.querySelector('.navbar .search-bar input');

    searchInput.addEventListener('input', (e) => {
        // TODO: add search functionality
        console.log('Searching for:', e.target.value);
    });

}
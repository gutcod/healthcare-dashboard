import { initializeDashboardCards } from './components/dashboardCards.js';
import { initializeSidebar } from './components/sidebar.js';
import { initializeNavbar } from './components/navbar.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeDashboardCards();
    initializeSidebar();
    initializeNavbar();
});
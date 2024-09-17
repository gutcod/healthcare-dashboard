export function initializeDashboardCards() {
    const dashboardGrid = document.querySelector('.dashboard-grid');

    const cards = [
        { title: 'Diagnostics', type: 'diagnostics' },
        { title: 'Patients', type: 'patients' },
        { title: 'Health Index', type: 'health-index' },
        { title: 'Overall Appointments', type: 'appointments' },
        { title: 'COVID-19 Pandemic', type: 'covid-map' },
        { title: 'Company Growth', type: 'company-growth' },
    ];

    cards.forEach(card => {
        const cardElement = createCard(card);
        dashboardGrid.appendChild(cardElement);
    });
}

function createCard(card) {
    const cardElement = document.createElement('div');
    cardElement.className = `card ${card.type}`;

    const title = document.createElement('h2');
    title.textContent = card.title;
    cardElement.appendChild(title);

    // Add specific content based on card type
    switch(card.type) {
        case 'diagnostics':
            cardElement.appendChild(createDiagnosticsChart());
            break;
        case 'patients':
            cardElement.appendChild(createPatientsChart());
            break;
        case 'health-index':
            cardElement.appendChild(createHealthIndex());
            break;
        case 'appointments':
            cardElement.appendChild(createAppointmentsChart());
            break;
        case 'covid-map':
            cardElement.appendChild(createCovidMap());
            break;
        case 'company-growth':
            cardElement.appendChild(createCompanyGrowthChart());
            break;
    }

    return cardElement;
}

function createDiagnosticsChart() {
    // Placeholder for diagnostics chart
    const chart = document.createElement('div');
    chart.className = 'chart diagnostics-chart';
    chart.textContent = 'Diagnostics Chart Placeholder';
    return chart;
}

function createPatientsChart() {
    // Placeholder for patients chart
    const chart = document.createElement('div');
    chart.className = 'chart patients-chart';
    chart.textContent = 'Patients Chart Placeholder';
    return chart;
}

function createHealthIndex() {
    // Placeholder for health index
    const index = document.createElement('div');
    index.className = 'health-index';
    index.textContent = 'Health Index: 75%';
    return index;
}

function createAppointmentsChart() {
    // Placeholder for appointments chart
    const chart = document.createElement('div');
    chart.className = 'chart appointments-chart';
    chart.textContent = 'Appointments Chart Placeholder';
    return chart;
}

function createCovidMap() {
    // Placeholder for COVID-19 map
    const map = document.createElement('div');
    map.className = 'covid-map';
    map.textContent = 'COVID-19 Map Placeholder';
    return map;
}

function createCompanyGrowthChart() {
    // Placeholder for company growth chart
    const chart = document.createElement('div');
    chart.className = 'chart company-growth-chart';
    chart.textContent = 'Company Growth Chart Placeholder';
    return chart;
}
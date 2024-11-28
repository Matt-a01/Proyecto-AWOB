// Selección del contexto para la gráfica
const ctx = document.getElementById('matriculaChart').getContext('2d');

// Configuración y creación de la gráfica de matrículas
const matriculaChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
        datasets: [{
            label: 'Cantidad de Matrículas',
            data: [450, 500, 550, 600, 650, 700],
            backgroundColor: 'rgba(6, 105, 27, 0.8)',
            borderColor: 'rgba(6, 105, 27, 1)',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

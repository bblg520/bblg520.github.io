function go(id) {
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

document.addEventListener("DOMContentLoaded", () => {

    const charts = [
        {
            id: "schoolChart",
            title: "Support for Safe Gun Storage",
            yLabel: "Percentage of people who support safe gun storage",
            labels: ['Americans', 'Gun Owners', 'Non-Gun Owners', 'Democrats', 'Republicans'],
            data: [74, 62, 81, 84, 65],
            colors: ['#8B4513', '#D2691E', '#228B22', '#1E90FF', '#B22222']
        },
        {
            id: "publicChart",
            title: "Support for Stronger Gun Policies",
            yLabel: "Percentage of people who support stronger gun policies",
            labels: ['Background Checks', 'Red Flag Laws', 'Safe Storage'],
            data: [80, 70, 74],
            colors: ['#4A90E2', '#FF6347', '#8B4513']
        },
        {
            id: "policyChart",
            title: "Gun Law Strength vs Safety",
            yLabel: "Gun death rate (percentage)",
            labels: ['Top 10 States', 'Bottom 10 States'],
            data: [50, 100],
            colors: ['#2E8B57', '#B22222']
        }
    ];

    charts.forEach(c => {
        new Chart(document.getElementById(c.id), {
            type: 'bar',
            data: {
                labels: c.labels,
                datasets: [{ data: c.data, backgroundColor: c.colors }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { display: false },
                    title: { display: true, text: c.title }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        title: {
                            display: true,
                            text: c.yLabel
                        }
                    }
                }
            }
        });
    });

});

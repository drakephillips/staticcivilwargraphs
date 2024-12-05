// Fetch data from the JSON file
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        // Extract data for charts
        const years = data.map(item => item.Year);
        const enlistedSoldiers = data.map(item => item["Enlisted Soldiers in the Union"]);
        const northernPopulation = data.map(item => item["Northern Pop"]);
        const maleLaborParticipation = data.map(item => item["Male Participation in Labor Force North (%)"]);
        const femaleLaborParticipation = data.map(item => item["Female Participation in Labor Force North (%)"]);
        const northernGDP = data.map(item => item["Northern GDP"]);
        const soldierPensionsAllocation = data.map(item => item["Fiscal Allocation Towards Union Soldier Pensions"]);
        const dependentsAllocation = data.map(item => item["Fiscal Allocation Towards Dependents, Widows, Orphans, etc."]);
        const infrastructureAllocation = data.map(item => item["Fiscal Allocation for Infastructure"]);
        const educationAllocation = data.map(item => item["Fiscal Allocation for Education"]);
        const freedmensBureauAllocation = data.map(item => item["Freedmen's Buearu Allocation"]);
        

        // Enlisted Soldiers Chart
        const ctxSoldiers = document.getElementById('enlisted-soldiers-chart').getContext('2d');
        new Chart(ctxSoldiers, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Enlisted Soldiers in the Union',
                        data: enlistedSoldiers,
                        borderColor: 'rgba(75,192,192,1)',
                        backgroundColor: 'rgba(75,192,192,0.2)',
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: 'Union Population',
                        data: northernPopulation,
                        borderColor: 'rgb(132,192,75)',
                        backgroundColor: 'rgba(132,192,75,0.2)',
                        fill: true,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });

        // Labor Force Participation Chart
        const ctxLabor = document.getElementById('labor-participation-chart').getContext('2d');
        new Chart(ctxLabor, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Male Labor Participation (%)',
                        data: maleLaborParticipation,
                        borderColor: 'rgba(54,162,235,1)',
                        backgroundColor: 'rgba(54,162,235,0.2)',
                        fill: true,
                        tension: 0.1
                    },
                    {
                        label: 'Female Labor Participation (%)',
                        data: femaleLaborParticipation,
                        borderColor: 'rgba(255,99,132,1)',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        fill: true,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: true } }
            }
        });

        // Northern GDP Chart
        const ctxGDP = document.getElementById('gdp-chart').getContext('2d');
        new Chart(ctxGDP, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
                    {
                        label: 'Northern GDP',
                        data: northernGDP,
                        borderColor: 'rgba(54,162,235,1)',
                        backgroundColor: 'rgba(54,162,235,0.2)',
                        fill: true,
                        tension: 0.1
                    }
                ]
            },
            options: {
                responsive: true,
                scales: { y: { beginAtZero: false } }
            }
        });

        // Fiscal Spending Chart
        const ctxFiscal = document.getElementById('fiscal-spending-chart').getContext('2d');
        new Chart(ctxFiscal, {
            type: 'line',
            data: {
                labels: years,
                datasets: [
            {
                label: 'Union Soldier Pensions',
                data: soldierPensionsAllocation,
                borderColor: 'rgba(255, 99, 132, 1)',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.1
            },
            {
                label: 'Dependents, Widows, Orphans',
                data: dependentsAllocation,
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.1
            },
            {
                label: 'Infrastructure',
                data: infrastructureAllocation,
                borderColor: 'rgba(255, 206, 86, 1)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
                tension: 0.1
            },
            {
                label: 'Education',
                data: educationAllocation,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1
            },
            {
                label: "Freedmen's Bureau",
                data: freedmensBureauAllocation,
                borderColor: 'rgba(153, 102, 255, 1)',
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                fill: true,
                tension: 0.1
            }
        ]
           },
           options :{
               responsive :true ,
               scales :{
                   y :{
                       beginAtZero :true 
                   }
               }
           }
       });
   })
   .catch(error => console.error('Error fetching or processing JSON:', error));

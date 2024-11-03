new Chart(document.getElementById("pieChart"), {
    type: 'pie',
    data: {
        labels: ['FrontEnd', 'BackEnd', 'Cloud', 'Freelance', 'Database'],
        datasets: [{
            backgroundColor: ["#e63946", "#254BDD", "#ffbe0b", "#1d3557", "#326998"],
            data: [418, 263, 434, 586, 332]
        }]
    }
});

new Chart(document.getElementById("myChart"), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'In 2024 High Scores is 29',
            backgroundColor: [
        "rgba(255, 99, 132, 0.5)",  
        "rgba(54, 162, 235, 0.5)",  
        "rgba(255, 206, 86, 0.5)",  
        "rgba(75, 192, 192, 0.5)",  
        "rgba(153, 102, 255, 0.5)", 
        "rgba(255, 159, 64, 0.5)",  
        "rgba(201, 203, 207, 0.5)", 
        "rgba(255, 99, 132, 0.5)",  
        "rgba(54, 162, 235, 0.5)",  
        "rgba(255, 206, 86, 0.5)",
        "rgba(75, 192, 192, 0.5)",  
        "rgba(153, 102, 255, 0.5)"  
    ],
    borderColor: [
        "rgba(255, 99, 132, 1)",  
        "rgba(54, 162, 235, 1)",  
        "rgba(255, 206, 86, 1)",  
        "rgba(75, 192, 192, 1)",  
        "rgba(153, 102, 255, 1)", 
        "rgba(255, 159, 64, 1)",  
        "rgba(201, 203, 207, 1)", 
        "rgba(255, 99, 132, 1)", 
        "rgba(54, 162, 235, 1)",  
        "rgba(255, 206, 86, 1)",  
        "rgba(75, 192, 192, 1)",  
        "rgba(153, 102, 255, 1)"  
    ],
            data: [5, 2, 4, 6, 8, 11, 15, 18, 20, 22, 25, 29],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: { beginAtZero: true }
        }
    }
});
function openLink(){
    window.location.href = "https://sree7095-portfolio.netlify.app";
}
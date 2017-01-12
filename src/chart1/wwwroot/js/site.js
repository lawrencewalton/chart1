// Write your Javascript code.

$(document).ready(function () {


    //1st chart
    var ctx1 = document.getElementById("salesChart");
    var salesChart = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: ["3Q", "4Q", "1Q", "2Q", "3Q", "4Q"],
            datasets: [
                {
                    label: '2015',
                    data: [15, 14, 16, 17, 18, 19],
                    backgroundColor: 'rgba(35, 224, 192, 0.2)',
                    borderColor: 'rgba(35, 224, 192, 1)',
                    borderWidth: 1
                },{
                    label: '2016',
                    data: [20, 21, 22, 23, 24, 25],
                    backgroundColor: 'rgba(219, 71, 26, 0.2)',
                    borderColor: 'rgba(219, 71, 26, 1)',
                    borderWidth: 1
                }

            ],
            
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });


    //2nd Chart
    var data2 = {
    labels: [
        "Food",
        "Hygiene",
        "Cleaning"
    ],
    datasets: [
        {
            data: [45, 35, 20],
            backgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ],
            hoverBackgroundColor: [
                "#FF6384",
                "#36A2EB",
                "#FFCE56"
            ]
        }]
    };

    var ctx2 = document.getElementById("salesBreakdown");
    var salesBreakdown = new Chart(ctx2, {
        type: 'doughnut',
        data: data2,
        animation: {
            animateRotate: true
        }
    });


    //3rd Chart
    var data3 = {
        labels: ["3Q", "4Q", "1Q", "2Q", "3Q", "4Q"],        
        datasets: [
            {
                label: '2015',
                data: [1.5, -1, 2, 3, 1.5, 0.5],
                borderColor: 'rgba(35, 224, 192, 1)',
                fill: false,
                borderWidth: 1
            }, {
                label: '2016',
                data: [3, 2, -1, 2, 4, 2],
                borderColor: 'rgba(219, 71, 26, 1)',
                fill: false,
                borderWidth: 1
            }
        ]
    }

    var ctx3 = document.getElementById("profitMargin");
    var profitMargin = new Chart(ctx3, {
        type: 'line',
        data: data3,
        options: {}
    });

    //4th Chart
    var data4 = {
        datasets: [{
            data: [
                11,
                16,
                7,
                3,
                14
            ],
            backgroundColor: [
                "#FF6384",
                "#4BC0C0",
                "#FFCE56",
                "#A71ADB",
                "#36A2EB"
            ],
            label: 'My dataset' // for legend
        }],
        labels: [
            "Bob",
            "Sally",
            "Mike",
            "Nancy",
            "Suzy"
        ]
    };




    var ctx4 = document.getElementById("salesPerformance");
    var salesPerformance = new Chart(ctx4, {
        type: 'polarArea',
        data: data4,
        options: {}
    });


});



// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");


function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;
    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


// ----------------- CHARTS --------------

// BAR CHART
var barChartOption = {
    series: [{
        data: [10, 8, 6, 4, 2],
        name: "Products",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },
    colors: [
        "#2962ff",
        "#d50000",
        "#2e7d32",
        "#ff6d00",
        "#583cb3",
    ],
    plotOptions: { // Corrected from 'plotOption'
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    stroke: {
        color: ["transparent"], // Fixed typo
        show: true,
        width: 2,
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
        title: {
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            show: true,
            color: "#55596e",
        },
        axisTicks: {
            show: true,
            color: "#55596e",
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Count",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOption);
barChart.render();


//  AREA Chart

// AREA CHART
var areaChartOptions = {
    series: [{
        name: "Purchase Orders",
        data: [31, 40, 28, 51, 42, 109, 100],
    }, {
        name: "Sales Orders",
        data: [11, 32, 45, 32, 34, 52, 41],
    }],
    chart: {
        type: "area",
        height: 350,
        background: "transparent",
        toolbar: {
            show: false,
        },
    },
    colors: ["#2962ff", "#d50000"], // Adjusted for purchase and sales
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100],
        },
    },
    grid: {
        borderColor: "#55596e",
        yaxis: {
            lines: {
                show: true,
            },
        },
        xaxis: {
            lines: {
                show: true,
            },
        },
    },
    legend: {
        labels: {
            colors: "#f5f7ff",
        },
        show: true,
        position: "top",
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"], // Example months
        title: {
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    yaxis: {
        title: {
            text: "Orders",
            style: {
                color: "#f5f7ff",
            },
        },
        axisBorder: {
            color: "#55596e",
            show: true,
        },
        axisTicks: {
            color: "#55596e",
            show: true,
        },
        labels: {
            style: {
                colors: "#f5f7ff",
            },
        },
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
};

var areaChart = new ApexCharts(document.querySelector("#area-chart"), areaChartOptions);
areaChart.render();
const chartBox = document.querySelector('.chart-box');
let day = new Date().getDay();

getData();

async function getData() {
    const response = await fetch('data.json');
    const data = await response.json();

    displayBarCharts(data);
}

function displayBarCharts(result) {
    result.forEach(item => {
        let chart = getChartElement(item.day, item.amount);
        chartBox.appendChild(chart);
    });

    if(day === 0) {
        day = 7;
    }
    const charts = document.querySelectorAll('.chart-box .bar');
    let activeChart = charts[--day];
    activeChart.classList.add('active');
    
    charts.forEach(chart => chart.addEventListener('mouseover', (e) => {
        showInfo(e.target);
    }));
}

function getChartElement(day, amount) {
    const chart = createElem('div', 'chart');

    const barElem = createElem('div', 'bar');
    barElem.style.height = `${amount * 4}px`;

    const dayTag = createElem('h5');
    dayTag.textContent = day;

    chart.appendChild(barElem);
    chart.appendChild(dayTag);

    return chart;
}

function createElem(elem, cssClass) {
    const element = document.createElement(elem);
    if(cssClass) {
        element.className = cssClass;
    }
    return element;
}

function showInfo(target) {
    const info = createElem('span', 'info');

    let val = target.style.height;
    val = val.split('px');
    let price = +val[0] / 4;
    info.innerText = price;

    target.appendChild(info);

    target.addEventListener('mouseout', (e) => {
        hideInfo(info);
    });
}

function hideInfo(info) {
    info.remove();
}

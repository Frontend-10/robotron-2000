const parts = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },
    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
};

const controllers = document.querySelectorAll('[data-controller]');
const statistics = document.querySelectorAll('[data-statistics]');

controllers.forEach((element) => { 
    element.addEventListener('click', (event) => {
        manageAttributes(event.target.dataset.controller, event.target.parentNode);
        updateStatistics(event.target.dataset.part);
    })
});

function manageAttributes(value, controller) {
    const counter = controller.querySelector('[data-counter]');

    if (value == '+') counter.value = parseInt(counter.value) + 1;
    else counter.value = parseInt(counter.value) - 1;
}

function updateStatistics(part) {
    
    statistics.forEach((element) => {
        element.textContent = parseInt(element.textContent) + parts[part][element.dataset.statistics]
    })
}

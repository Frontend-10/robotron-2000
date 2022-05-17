const controllers = document.querySelectorAll('[data-controller]');

controllers.forEach((element) => {
    element.addEventListener('click', (event) => {
        manageAttributes(event.target.innerHTML, event.target.parentNode);
    })
})

function manageAttributes(value, parentElement) {
    const counter = parentElement.querySelector('[data-counter]');

    if (value == '+') counter.value = parseInt(counter.value) + 1;
    else counter.value = parseInt(counter.value) - 1;
}
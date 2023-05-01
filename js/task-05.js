const input = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

function onInputEl(evt) {
    spanEl.textContent = evt.currentTarget.value;
};

input.addEventListener("input", onInputEl);

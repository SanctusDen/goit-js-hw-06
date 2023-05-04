const input = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputEl = (evt) => {
  evt.currentTarget.value === ""
    ? (input.textContent = "Anonymous")
    : (spanEl.textContent = evt.currentTarget.value);
};
input.addEventListener("input", onInputEl);

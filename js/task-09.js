const btnEl = document.querySelector('button.change-color')
const spanEl = document.querySelector('span.color');

btnEl.addEventListener('click', () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanEl.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

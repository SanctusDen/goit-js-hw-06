const refs = {
    generalValue: document.querySelector('#value'),
    addUserButton: document.querySelector('button[data-action="decrement"]'),
    removeUserButton: document.querySelector('button[data-action="increment"]'),
};

let value = refs.generalValue.textContent;
value = 0;

const onAddUserButton = () => (refs.generalValue.textContent = value -= 1)
const onRemoveUserButton = () => (refs.generalValue.textContent = value += 1)

refs.addUserButton.addEventListener('click', (evt) => {
    refs.generalValue.addEventListener('click', onGeneralValue);
});

refs.removeUserButton.addEventListener('click', (evt) => {
    refs.generalValue.removeEventListener('click', onGeneralValue);
});
function onGeneralValue(evt) { };

refs.addUserButton.addEventListener("click", onAddUserButton);
refs.removeUserButton.addEventListener("click", onRemoveUserButton);
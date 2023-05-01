const input = document.querySelector('#validation-input');

function onInputBlur (evt) {
    if (Number(input.dataset.length) === input.value.length) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    }

    else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
};

input.addEventListener('blur', onInputBlur);
console.log(onInputBlur)
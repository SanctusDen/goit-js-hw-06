const refs = {
    input: document.querySelector('#font-size-control'),
    label: document.querySelector('#text'),
};

const onInputSize = (evt) => {
    refs.label.style.fontSize = evt.target.value + 'px'
}

refs.input.addEventListener('input', onInputSize);
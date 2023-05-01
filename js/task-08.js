const form = document.querySelector('.login-form');
const inputEm = document.querySelector('.login-form input');

function onFormSubmit(evt) {
    evt.preventDefault();
    const formData = {
        email: evt.target.elements.email.value,
        password: evt.target.elements.password.value,
    };

    if (formData.email === '' || formData.password === '') {
        return alert('all fields must be filled in');
    };

    evt.currentTarget.reset()
    console.log(formData)
};

form.addEventListener('submit',onFormSubmit);
console.log(onFormSubmit)
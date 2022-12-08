const input = document.querySelector('#validation-input');
const symbol = input.getAttribute('data-length');

input.addEventListener('blur', onTextChek);

function onTextChek(event) {
    let textInput = event.currentTarget.value;

    if (textInput.length == symbol) {
        input.classList.add('valid');
    } else {
        input.classList.add('invalid');
    }
}
/**
 * Checks if form is valid.
 * Shows error message on each error appeared.
 *
 * @param {*} data  FormData object.
 */
function validateForm(data) {
    let isValid = true;
    for (let pair of data) {
        const [field, value] = pair;
        errors()[field].errorsList.forEach(error => {
            if (error.validate && !error.validate(value)) {
                isValid = false;
                proceedError(field, error.type);
            }
        })
    }
    return isValid;
}

/**
 * Clears all form error messages.
 */
function clearErrors() {
    const elements = document.getElementsByClassName('form__field__input');
    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.addEventListener('focus', () => {
            element.parentNode.getElementsByClassName('form__field__errors-list')[0].innerHTML = ''
        })
    }
}

/**
 * Checks if this type of error has already been added to the source errors container.
 * If not, adds new error message.
 *
 * @param {*} source    Input element that 'caused validation to fail.
 * @param {*} type      Type of error appeared.
 */
function proceedError(source, type) {
    const error = errors()[source].errorsList.find(error => error.type === type);
    if (errors()[source].container.querySelector(`[data-type=${error.type}]`)) return;
    errors()[source]
        .container
        .insertAdjacentHTML('beforeEnd', `
                <span class="error" data-type="${error.type}">${error.value}</span>
            `)
}
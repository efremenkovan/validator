/**
 * Checks if form is valid.
 * If so, sends post req to the server.
 *
 * @param {*} e     Submit event.
 */
async function handleSubmit(e) {
    e.preventDefault()
    clearErrors();

    if (!validateForm(new FormData(e.target))) {
        return;
    }

    if (checkPassEquality()) {
        const res = await fetch('/auth/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(new FormData(e.target)),
        })
            .then(res => res.json())

        res.message === "OK"
            ? location.pathname = "/"
            : errorsHandler(res.message);
            /* 
                Example of the message being returned from server:
                'nicknake|taken'

                Structure:
                source|type
                Source is a name of form field that caused an error.


                You can use your own message, you just will need to change 
                'errorsHandler' function.
            */
    } else {
        errorsHandler('repeat_password|equal')
    }
}

/**
 * Checks if pass field value is equal to repeat pass field value.
 */
function checkPassEquality() {
    return document.getElementById('password').value ===
        document.getElementById('repeat_password').value;
}

/**
 * Runs proceedError function on every error message provided.
 * @param {*} resErrors     Array of errors [source|type] or single error source|type
 */
function errorsHandler(resErrors) {
    if (Array.isArray(resErrors)) {
        resErrors.forEach(e => {
            const [source, type] = e.split('|');
            proceedError(source, type)
        })
    } else {
        proceedError(...resErrors.split('|'))
    }
}
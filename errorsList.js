const errors = {
    password: {
        target: document.getElementById('password'),
        container: document.getElementById('password').parentNode.querySelector('.form__field__errors-list'),
        errorsList: [
            {
                type: 'length',
                value: 'Пароль должен быть не менее 6 символов.',
                validate: (string) => string.length >= 6,
            },
            {
                type: 'chars',
                value: 'Пароль должен содержать как минимум 1 цифру и 1 букву.',
                validate: (string) => new RegExp(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/).test(string)
            }
        ]
    },
    repeat_password: {
        target: document.getElementById('repeat_password'),
        container: document.getElementById('repeat_password').parentNode.querySelector('.form__field__errors-list'),
        errorsList: [
            {
                type: 'equal',
                value: 'Пароль и повторение пароля не совпадают.',
                validate: (s1) => s1 === document.querySelector('#password').value,
            }
        ]
    },
    nickname: {
        target: document.getElementById('nickname'),
        container: document.getElementById('nickname').parentNode.querySelector('.form__field__errors-list'),
        errorsList: [
            {
                type: 'taken',
                value: 'Такой пользователь уже зарегистрирован',
            },
            {
                type: 'chars',
                value: 'Никнейм может содержать только буквы (минимум 1) и символ \"_\"',
                validator: (string) => new RegExp(/^(\w+|\_?)$/).test(string)
            },
            {
                type: 'length',
                value: 'Никнейм должен быть не менее 4х символов и не более 24.',
                validator: (string) => string.length >= 4 && string.length < 24
            }
        ]
    },
    name: {
        target: document.getElementById('name'),
        container: document.getElementById('name').parentNode.querySelector('.form__field__errors-list'),
        errorsList: [
            {
                type: 'chars',
                value: 'Имя может состоять только из букв',
                validate: (string) => new RegExp(/^[a-zа-я]+$/gi).test(string)
            },
            {
                type: 'length',
                value: 'Имя не может быть короче двух символов',
                validate: (string) => new RegExp(/^\w{2,}$/gi).test(string)
            }
        ]
    },
    surname: {
        target: document.getElementById('surname'),
        container: document.getElementById('surname').parentNode.querySelector('.form__field__errors-list'),
        errorsList: [
            {
                type: 'chars',
                value: 'Фамилия может состоять только из букв',
                validate: (string) => new RegExp(/^[a-zа-я]+$/gi).test(string)
            },
            {
                type: 'length',
                value: 'Фамилия не может быть короче двух символов',
                validate: (string) => new RegExp(/^\w{2,}$/gi).test(string)
            }
        ]
    }
}
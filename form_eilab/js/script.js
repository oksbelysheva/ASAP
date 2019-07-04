$(document).ready(function() {
    $(".phonemasked").inputmask("+7(999)999-99-99");
});

const form = document.getElementsByTagName('form')[0];
const error = document.getElementById('error');

let errorMessage = "";

function validateName(name) {
    if (!checkIsNotNull(name)) {
        errorMessage += 'Поле имени не заполнено<br>';
    } else {
        if (!checkIsWord(name)) {
            errorMessage += 'Поле имени содержит запрещенные символы <br>';
        }
    }
}

function validateSurname(surname) {
    if (!checkIsNotNull(surname)) {
        errorMessage += 'Поле фамилии не заполнено<br>';
    } else {
        if (!checkIsWord(surname)) {
            errorMessage += 'Поле фамилии содержит запрещенные символы <br>';
        }
    }
}

function validateEmail(email) {
    if (!checkIsNotNull(email)) {
        errorMessage += 'Поле email не заполнено<br>';
    } else {
        const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const matchEmail = email.match(regex);
        if (matchEmail == null || matchEmail[0].length != email.length) {
            errorMessage += "Ошибка: при валидации email<br>";
        }
    }
}

function validatePhone(phone) {
    if (!checkIsNotNull(phone)) {
        errorMessage += 'Поле номера телефона не заполнено<br>';
    } else {
        const regex = /\+7\(\d{3}\)\d{3}\-\d{2}-\d{2}/;
        const matchPhone = phone.match(regex);
        if (matchPhone == null || matchPhone[0].length != phone.length) {
            errorMessage += "Ошибка: при валидации телефона<br>";
        }
    }
}

function validateConfirm() {
    const confirm = document.getElementById('reg_confirm');
    if (!confirm.checked) {
        errorMessage += "Подтвердите условия конфиденциальности<br>";
    }
}

function validateChoosePay() {
    const card = document.getElementById('reg_сhoose_pay_card');
    const bill = document.getElementById('reg_сhoose_pay_bill');
    if (!card.checked && !bill.checked) {
        errorMessage += "Выберите способ оплаты<br>";
    }
}

function validateGoods() {
    const goods = document.getElementsByClassName('reg_count');
    Array.prototype.forEach.call(goods, (good, index) => {
        if (good.value < 1) {
            const nameGoods = document.querySelectorAll('.reg_position tr')[index + 1].getElementsByTagName('td')[0].innerText;
            errorMessage += `Количество товара ${nameGoods} должно быть ненулевым<br>`;
        }
    });
}

function checkIsNotNull(elem) {
    return elem.length != 0;
}

function checkIsWord(elem) {
    const regex = /[A-zА-яЁё]+/;
    const matchElem = elem.match(regex);
    return !(matchElem == null || matchElem[0].length != elem.length);
}

function validateForm() {
    const name = document.getElementById('reg_name').value;
    const surname = document.getElementById('reg_surname').value;
    const email = document.getElementById('reg_email').value;
    const phone = document.getElementById('reg_tel').value;
    error.innerHTML = "";
    errorMessage = '';
    validateName(name);
    validateSurname(surname);
    validateEmail(email);
    validatePhone(phone);
    validateGoods();
    validateConfirm();
    validateChoosePay();
    error.innerHTML = errorMessage;
    return (errorMessage.length == 0);
}
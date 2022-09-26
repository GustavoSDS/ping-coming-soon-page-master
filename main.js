let inputEmail = document.getElementById('email');
let submitBtn = document.getElementById('submit');

submitBtn.addEventListener('click', (event) => {
    event.preventDefault();
    varlidateEmail(inputEmail.value);
});

function varlidateEmail(email) {
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if (expReg.test(email) == true) {
        inputEmail.classList.remove('borderR')
        inputEmail.classList.add('borderB');
        error.style.visibility = 'hidden';
        inputEmail.value = '';
    } else {
        inputEmail.classList.remove('borderB')
        inputEmail.classList.add('borderR');
        error.style.visibility = 'visible';
        console.log(expReg.test(email));
    }
}
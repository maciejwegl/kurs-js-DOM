console.log("Zadanie-47572");

let form = document.getElementById('form');
let allAgreeChx = document.getElementById('agree-all');

let validate = (event) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let agreeM1 = document.getElementById('agree-1');
    let errors = document.getElementById('errors');

    errors.innerHTML = '';

    if (name.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz imię i nazwisko';
        errors.appendChild(liError);
    }

    if (email.value.trim() === '') {
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email';
        errors.appendChild(liError);
    }

    if (!email.value.includes('@')) {
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierać @';
        errors.appendChild(liError);
    }

    if (!agreeM1.checked) {
        let liError = document.createElement('li');
        liError.innerText = 'Niezbędna zgoda marketingowa 1';
        errors.appendChild(liError);
    }
    
    if (errors.children.length > 0) {
        event.preventDefault();
    }

}

let agree = (event) => {
    let agreeM1 = document.getElementById('agree-1');
    let agreeM2 = document.getElementById('agree-2');

    agreeM1.checked = event.target.checked;
    agreeM2.checked = event.target.checked;

    agreeM1.disabled = event.target.checked;
    agreeM2.disabled = event.target.checked;

}

form.addEventListener('submit', validate);
allAgreeChx.addEventListener('change', agree);

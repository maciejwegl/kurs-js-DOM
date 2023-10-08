console.log('Hello Maciek');

let form = document.querySelector('form');


let subForm = (event) => {

    let fName = document.querySelector('[name="fname"]');
    let lName = document.querySelector('[name="lname"]');

    event.preventDefault();
    console.log('Wysyłanie formularza zostało zblokowane');
    console.log(`Imię: ${fName.value}, Nazwisko: ${lName.value}`);
}


form.addEventListener('submit', subForm);
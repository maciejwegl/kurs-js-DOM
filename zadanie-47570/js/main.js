console.log("Ustaw tło paragrafów");

let btn = document.getElementById('btn-change');
let p1 = document.querySelector('.first-p');
let p2 = document.querySelector('.second-p');


let setBackground = () => {

    p1.classList.toggle("red-p");
    p2.classList.toggle('yellow-p');
}

btn.addEventListener('click', setBackground);



let sumUp = (event) => {
    console.log(`Target: ${event.target.outerHTML}`);
    console.log(`Event type: ${event.type}`);
}

let btnSumUp = document.getElementById('sum-up');

btnSumUp.addEventListener('click', sumUp);

btnSumUp.addEventListener('click', sumUp);
btnSumUp.addEventListener('dbclick', sumUp);

let a108 = document.getElementById('akademia108');
a108.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(`Default action stopped`);
});

console.log(a108);

for (let btn of document.querySelectorAll('button.edit')) {
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
       alert('User edit'); 
    });
    btn.closest('div.row').addEventListener('click', () => {
        alert('About user');
    });
}





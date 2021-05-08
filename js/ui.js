const numberGeneratorDOM = document.getElementById('numberGenerator');
const numberDOM = document.getElementById('number');
const button = document.getElementById('button');

button.addEventListener('click', e => {
    const number = Math.floor((Math.random() * 99) + 1);
    numberDOM.innerText = number;
    return;
})




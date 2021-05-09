const numberGeneratorDOM = document.getElementById('numberGenerator');
const numberDOM = document.getElementById('number');
const button = document.getElementById('button');

const nasaPhotoDOM = document.getElementById('nasaPhoto');

if (numberGeneratorDOM) {
    button.addEventListener('click', e => {
        const number = Math.floor((Math.random() * 99) + 1);
        numberDOM.innerText = number;
        return;
    })
}

if (nasaPhotoDOM) {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res => {
        nasaPhotoDOM.innerHTML = `<img src="${res.data.url}" alt="Nasa picture of the day">`;
    })
    .catch(err => console.log(err));
}







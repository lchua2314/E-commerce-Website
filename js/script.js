//Login
const sendBtn = document.querySelector('#loginBtn');
const usernameIn = document.querySelector('#userid');
const usernameOut = document.querySelector('#usernameDisplay');
const passwordInfo = document.querySelector('#pswrd');

const formJS = document.querySelector('form');

sendBtn.addEventListener('click', sendMsg);
formJS.addEventListener('submit', (event) => { 
    event.preventDefault();
    console.log('form submitted!');
});

function sendMsg () {
    let content = 'Hello, ' + usernameIn.value + '!';
    let content2 = passwordInfo.value;
    //console.log(content);
    if (content === 'Hello, !') {
        alert('Please enter a username.');
    }
    else if (content2.length < 8){
        alert('Please enter a password that is at least 8 character long.');
    }
    else {
        usernameOut.innerHTML = content;
        usernameIn.value = '';
        passwordInfo.value = '';
    }
}

//Slider
const nextBtn = document.querySelector('.nextBtn');
const prevBtn = document.querySelector('.prevBtn');
const container = document.querySelector('.images');

let counter = 0;

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

function nextSlide() {

    container.animate([{opacity: '0.1'},{opacity: '1.0'}],{duration: 1000, fill:'forwards'});

    if (counter === 4) {
        counter = -1;
    }

    counter++;

    container.style.backgroundImage = "url('css/img/bcg-" + counter + ".jpg";
}

function prevSlide() {

    container.animate([{opacity: '0.1'},{opacity: '1.0'}],{duration: 1000, fill:'forwards'});

    if (counter === 0) {
        counter = 5;
    }

    counter--;

    container.style.backgroundImage = "url('css/img/bcg-" + counter + ".jpg";
}
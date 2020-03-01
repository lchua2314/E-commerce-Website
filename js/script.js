const sendBtn = document.querySelector('#loginBtn');
const usernameIn = document.querySelector('#userid');
const usernameOut = document.querySelector('#usernameDisplay');
const passwordInfo = document.querySelector('#pswrd');

const formJS = document.querySelector('form');

sendBtn.addEventListener('click', sendMsg);
formJS.addEventListener('submit', (event) => { 
    event.preventDefault();
    console.log('form submitted!');
})

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
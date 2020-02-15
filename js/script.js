const sendBtn = document.querySelector('#loginBtn');
const messageIn = document.querySelector('#userid');
const messageOut = document.querySelector('#usernameDisplay');

sendBtn.addEventListener('click', sendMsg);

function sendMsg () {
    let content = 'Hello, ' + messageIn.value + '!';
    //console.log(content);
    if (content === '') {
        alert('Please Enter Valid Value. Current Value is Empty.');
    }
    else {
        messageOut.innerHTML = content;
        messageIn.value = '';
    }
}
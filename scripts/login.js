document.querySelector('#form').addEventListener('submit',submit);
let userInfo = JSON.parse(localStorage.getItem('userData'))
console.log(userInfo);
let count = 0;

function submit(event) {
    event.preventDefault();
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;
    if(email.length == 0 || password.length == 0) {
        alert('Please enter all details')
    }

    userInfo.forEach(function(elem) {
        if(email === elem.email && password === elem.password) {
            count++
        }
    })

    if(count === 0) {
        alert('Invalid credentials!')
    }
    else {
        alert('Congratulations! You are successfully logged in.')
        window.location.href='./index.html'
        count = 0
    }
    

}
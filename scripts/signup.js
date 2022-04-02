let userData = JSON.parse(localStorage.getItem('userData')) || [];
document.querySelector('#form').addEventListener('submit',submit);

function submit(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // console.log(name, contact, email, password)

    if (email.length == 0 || password.length == 0 || email.length == 0 || password.length == 0) {
        alert('Error: Please fill all the required fields !');
        return false;
    } 
    else {
        alert('You are sucessfully Signed up!');
        let obj = {
            name: name,
            contact: contact,
            email: email,
            password: password,
        }
        userData.push(obj)
        localStorage.setItem('userData',JSON.stringify(userData));
        window.location.href="./index.html"
    }
}
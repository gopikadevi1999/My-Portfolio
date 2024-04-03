//contact form sender script
const conactForm = document.querySelector(".email-form");
let sendername = document.getElementById("sendername");
let email = document.getElementById("email");
let subject = document.getElementById("subject");
let message = document.getElementById("message");

conactForm.addEventListener("submit", (e) => {
    e.preventDefault();


    const formData = {
        sendername: sendername.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    const xhr = new XMLHttpRequest();

    xhr.open("POST", "/");

   xhr.setRequestHeader("content-type", "application/json");

    xhr.onload = () => {
        if (xhr.responseText == 'success') {
            alert("Email sent successfully")

        } else {
            alert("Email sent successfully");
        }
    }

    xhr.send(JSON.stringify(formData));


})
let nameInput = document.getElementById("name");
let ageInput = document.getElementById("age");

let button = document.getElementById("submit");
let message = document.getElementById("message");

button.addEventListener("click", function() {

    let name = nameInput.value.trim();
    let age = Number(ageInput.value);

    if (name === "" || age === 0) {
        message.textContent = "Please fill all fields.";
    } else {
        message.textContent = `Hello ${name}, you are ${age} years old.`;
    }

});
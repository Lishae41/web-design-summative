const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let isValid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const service = document.getElementById("service");
    const date = document.getElementById("date");
    const message = document.getElementById("message");

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    if (name.value.trim() === "") {
        showError(name, "Name is required");
        isValid = false;
    }

    if (email.value.trim() === "") {
        showError(email, "Email is required");
        isValid = false;
    } else if (!validateEmail(email.value)) {
        showError(email, "Enter a valid email");
        isValid = false;
    }

    if (phone.value.trim() === "") {
        showError(phone, "Phone number is required");
        isValid = false;
    }

    if (service.value === "") {
        showError(service, "Please select a service");
        isValid = false;
    }

    if (date.value === "") {
        showError(date, "Please choose a date");
        isValid = false;
    }

    if (message.value.trim() === "") {
        showError(message, "Message cannot be empty");
        isValid = false;
    }

    if (isValid) {
        successMessage.textContent = "Your enquiry has been sent! We’ll get back to you soon.";
        form.reset();
    }
});

function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
}

function validateEmail(email) {
    const regex = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return regex.test(email);
}

const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMsg = document.querySelector('.error-msg');

emailForm.addEventListener('submit', function (e){
    e.preventDefault();
    const email = emailInput.value;
    if (isValidEmail(email)){
        emailInput.classList.remove('error');
        errorMsg.style.display = 'none';
        alert(`Email successfully sent to ${email} `);// Show a pop-up message
        // You can sumbit the form here
        emailForm.reset();// Reset the form after succesful submission
        errorMsg.style.display = 'none';// Hide the error message
    } else {
        emailInput.classList.add('error');
        errorMsg.style.display = 'block';
    }
});

function isValidEmail(email) {
    //Basic email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

const emailForm1 = document.getElementById('emailForm1');
const emailInput1 = document.getElementById('emailInput1');
const errorMsg1 = document.querySelector('.error-msg1');

emailForm1.addEventListener('submit', function (e){
    e.preventDefault();
    const email = emailInput1.value;
    if (isValidEmail(email)){
        emailInput1.classList.remove('error');
        errorMsg1.style.display = 'none';
        alert(`Email successfully sent to ${email} `);// Show a pop-up message
        // You can sumbit the form here
        emailForm1.reset();// Reset the form after succesful submission
        errorMsg1.style.display = 'none';// Hide the error message
    } else {
        emailInput1.classList.add('error');
        errorMsg1.style.display = 'block';
    }
});

function isValidEmail(email) {
    //Basic email validation regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};

// Add event listeners to all email input fields with the class
// const emailInputs = document.querySelectorAll('.email-input');

// emailInputs.forEach((input) => {
//     input.addEventListener("blur", function() {
//         const email = this.value;
//         const error = this.nextElementSibling;// Get the next sibling, which is the error message

//         //Regular expression for email validation
//         const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

//         if (regex.test(email)) {
//             error.style.display = "none"; //Hide the error message
//         } else {
//             error.style.display = "block"; //Show the error message
//         }
//     });

// });
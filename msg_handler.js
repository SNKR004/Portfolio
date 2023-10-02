// form-handler.js

document.getElementById("test").onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    var name = document.getElementById("fname").value;
    var email = document.getElementsByName("Email")[0].value;
    var message = document.getElementsByName("Message")[0].value;

    // Use Fetch API to submit form data to Formspree
    fetch("https://formspree.io/f/xeqbpkwk", {
        method: "POST",
        body: JSON.stringify({ Name: name, Email: email, Message: message }),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Form submitted successfully!');
            // Clear form fields
            document.getElementById("fname").value = "";
            document.getElementsByName("Email")[0].value = "";
            document.getElementsByName("Message")[0].value = "";
        } else {
            alert('Error submitting the form. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    });
};

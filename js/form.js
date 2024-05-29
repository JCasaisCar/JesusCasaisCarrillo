"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var confirmButton = document.getElementById("confirmButton");
    var form = document.getElementById("contactForm");

    submitButton.addEventListener("click", function(event) {
        //Validate the form
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
        } else {
            //Show the modal if the form is valid and store it in a variable
            var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
            modal.show();
        }
    });

    confirmButton.addEventListener("click", function() {
        //Reset the form
        form.reset();
        //Close the modal
        var modal = bootstrap.Modal.getInstance(document.getElementById("staticBackdrop"));
        modal.hide();
    });
});
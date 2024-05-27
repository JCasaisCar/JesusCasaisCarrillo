"use strict";
document.addEventListener("DOMContentLoaded", function() {
    var submitButton = document.getElementById("submitButton");
    var confirmButton = document.getElementById("confirmButton");
    var form = document.getElementById("contactForm");

    submitButton.addEventListener("click", function(event) {
        // Validar el formulario
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            form.classList.add("was-validated");
        } else {
            // Mostrar el modal si el formulario es válido
            var modal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
            modal.show();
        }
    });

    confirmButton.addEventListener("click", function() {
        // Limpiar el formulario
        form.reset();
        // Cerrar el modal
        var modal = bootstrap.Modal.getInstance(document.getElementById("staticBackdrop"));
        modal.hide();
    });
});


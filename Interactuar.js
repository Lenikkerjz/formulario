document.addEventListener('DOMContentLoaded', function() {
    const colorModeButton = document.getElementById('color-mode');
    if (colorModeButton) {
        const body = document.body;

        colorModeButton.addEventListener('mouseout', function() {
            body.classList.toggle('dark-mode');
            if (body.classList.contains('dark-mode')) {
                colorModeButton.textContent = 'Cambiar a Light Mode';
            } else {
                colorModeButton.textContent = 'Cambiar a Dark Mode';
            }
        });
    }

    const alerta = document.querySelector("#alerta");
    if (alerta) {
        alerta.addEventListener("click", mostrarAlerta);
    }

    const alertaForm = document.querySelector("#alerta-form");
    const alertaInput = document.querySelector("#alerta-input");
    if (alertaForm && alertaInput) {
        alertaForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(alertaInput.value);
            alertaForm.reset();
        });
    }

    
    (function() {
        emailjs.init("BuDSgA2wT5eeuCZE2");
    })();


    const contactForm = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');
    
    if (contactForm) {
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        const nameError = document.getElementById('nameError');
        const emailError = document.getElementById('emailError');
        const subjectError = document.getElementById('subjectError');
        const messageError = document.getElementById('messageError');
        
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            resetErrors();
            
            let isValid = true;
            
            if (nameInput.value.trim() === '') {
                showError(nameInput, nameError);
                isValid = false;
            }
            
            if (emailInput.value.trim() === '' || !isValidEmail(emailInput.value)) {
                showError(emailInput, emailError);
                isValid = false;
            }
            
            if (subjectInput.value.trim() === '') {
                showError(subjectInput, subjectError);
                isValid = false;
            }
            
            if (messageInput.value.trim() === '') {
                showError(messageInput, messageError);
                isValid = false;
            }
            
            if (isValid) {

                const templateParams = {
                    from_name: nameInput.value,
                    reply_to: emailInput.value,
                    subject: subjectInput.value,
                    message: messageInput.value
                };
                
                // Deshabilitar el botón mientras se envía
                const submitButton = document.getElementById('submitButton');
                submitButton.disabled = true;
                submitButton.textContent = 'Enviando...';
            
                emailjs.send('service_aqqukk8', 'template_8myhirb', templateParams)
                    .then(function(response) {
                        console.log('SUCCESS!', response.status, response.text);
                        contactForm.reset();
                        successMessage.style.display = 'block';
                        submitButton.textContent = 'Enviar Mensaje';
                        submitButton.disabled = false;
                        
                        setTimeout(function() {
                            successMessage.style.display = 'none';
                        }, 3000);
                    }, function(error) {
                        console.log('FAILED...', error);
                        alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
                        submitButton.textContent = 'Enviar Mensaje';
                        submitButton.disabled = false;
                    });
            }
        });
        
        function showError(input, errorElement) {
            input.classList.add('error');
            errorElement.style.display = 'block';
        }
        
        function resetErrors() {
            const inputs = contactForm.querySelectorAll('input, textarea');
            inputs.forEach(input => input.classList.remove('error'));
            
            const errorTexts = contactForm.querySelectorAll('.error-text');
            errorTexts.forEach(errorText => errorText.style.display = 'none');
        }
        
        function isValidEmail(email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    }
});


function mostrarAlerta() {
    alert("Hola!");
}


const mul = (a, b) => a * b;
console.log(mul(5, 37));


class libros {
    constructor(nombres, autores, precios) {
        this.nombres = nombres;
        this.autores = autores;
        this.precios = precios;
        this.leido = false;
    }
}
const libros1 = new libros("La metamorfosis", "Franz Kafka", 100000);
console.log(libros1);
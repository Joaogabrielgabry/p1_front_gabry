const form = document.querySelector('.corpo-newsletter');
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const submitButton = form.querySelector('.button');

function validateForm(event) {
    event.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    if (nameValue === '' || emailValue === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!emailPattern.test(emailValue)) {
        alert('Por favor, insira um email válido.');
    } else {
        alert(`Obrigado, ${nameValue}, por assinar nossa newsletter!`);
        form.reset(); 
    }
}

submitButton.addEventListener('click', validateForm);

const navLinks = document.querySelectorAll('.barrasuperior ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
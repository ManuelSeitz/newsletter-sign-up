
const card = document.querySelector('.container');
const submitCard = document.querySelector('.submit_container');
const dismiss = document.querySelector('[type="button"]');

const button = document.querySelector('[type="submit"]');

const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
}

button.addEventListener('click', () => {
    const emailInput = document.getElementById('email_input');
    const emailError = document.querySelector('.email_error');

    

    if (!validateEmail(emailInput.value)) {
        emailError.classList.add('show');

        emailInput.style.backgroundColor = 'hsla(4, 100%, 67%, .2)';
        emailInput.style.color = 'hsl(4, 100%, 67%)'
        emailInput.style.borderColor = 'hsl(4, 100%, 67%)';
        emailInput.style.outline = 'none';

        emailInput.classList.add('placeholder');

        e.preventDefault();
        return false;
    } else {
        card.classList.add('hide');
        submitCard.classList.remove('hide');

        document.querySelector('strong').innerHTML = emailInput.value;

        emailInput.style.backgroundColor = 'transparent';
        emailInput.style.color = 'hsl(234, 29%, 20%)'
        emailInput.style.borderColor = 'hsla(231, 7%, 60%, .5)';
        emailInput.style.outline = 'initial';

        emailError.classList.remove('show');
        return true;
    }
});

dismiss.addEventListener('click', () => {
    card.classList.remove('hide');
    submitCard.classList.add('hide');
})



const emailInput = document.getElementById('email');
const error_email = document.getElementById('error-email');
//blur event to check if value exists or not

emailInput.addEventListener('blur', ()=>{
    if (emailInput.value === '') {
        error_email.textContent = 'Please enter a valid email'
    }
    else {
        error_email.textContent = ''
    }

})





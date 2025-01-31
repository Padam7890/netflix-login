
const emailInput = document.getElementById('email');
const error_email = document.getElementById('error-email');
const labelEmail = document.getElementById('label-email');
//blur event to check if value exists or not

emailInput.addEventListener('blur', ()=>{
    if (emailInput.value === '') {
        error_email.textContent = 'Please enter a valid email'
        labelEmail.classList.remove('top-[3px]')

    }
    else {
        error_email.textContent = ''
        labelEmail.classList.add('top-[3px]');
        labelEmail.style.fontSize ='10px';
    }

})





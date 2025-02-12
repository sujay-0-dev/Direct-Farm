document.addEventListener('DOMContentLoaded' , function(){
  const form = document.getElementById('registerForm');
  const nameInput = document.getElementById('name');
  const phoneInput = document.getElementById('phone');
  const emailInput = document.getElementById('email');
  const addressInput = document.getElementById('address');
  const userTypeInput = document.getElementById('userType');
  const passwordInput = document.getElementById('password');
  const confirmpasswordInput = document.getElementById('confirmPassword');

  function validateForm() {
    let isValid = true 
    if (nameInput.value.trim() === '' ){
        showError('NameError', 'Name required');
        isValid = false ;
    }else{
        clearError('nameError');
    }
    
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test (phoneInput.value)){
        showError('phoneError' , 'please enter 10 digit phone number ');
        isValid = false;
    }else{
        clearError('phoneError');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test (emailInput.value)){
        showError ('emailError' , 'please enyter valid email adress');
        isValid = false;
    }else {
        clearError('emailError');
    }

    if (addressInput.value.trim() === ''){
        showError ('addressError', 'Address is requied');
        isValid = false ;

    }else{
        clearError ('adressError')
    }

    if (userTypeInput.value === ''){
        showError('userTypeError', 'Enter your userType');
        isValid = false
    }else{
        clearError('userTypeError');
    }

    if (passwordInput.value.length < 6 ){
        showError ('passwordError','Password should be minimum 6 character long');
        isValid = false;
        
    }else{
        clearError('passwordError');
    }

    if(confirmpasswordInput.value !== passwordInput.value ){
        showError('confirmPasswordError','Password do not match');
        isValid= false;

    }else{
        clearError('confirmPasswordError');
    }

    return isValid;
     
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (validateForm()) {
        console.log('Form submitted successfully');
        window.location.href = 'login.html';
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.color = 'red';
    }
}

function clearError(elementId) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = '';
    }
}



});

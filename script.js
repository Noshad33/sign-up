// Password and Confirm Password Verification 
// get Password
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');

confirmPasswordInput.addEventListener('input', () => {
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;
    if(password !== confirmPassword){
        confirmPasswordInput.style.outlineColor="red";
    }
    else{
        confirmPasswordInput.style.outlineColor="black";    
    }
})

// Swap to login-form using login text
var asking = document.getElementById('asking');
var user = document.getElementById('user');
var h1 = document.getElementById('heading');
var isDisplayed = true;
asking.addEventListener('click', function(){
    var removeEmail = document.getElementById('email');
    var removeConfirmPassword = document.getElementById('confirm-password');
    if(isDisplayed) {
     removeEmail.style.display="none";
     removeConfirmPassword.style.display="none";
     loginSwap.style.color="black";
     SignupSwap.style.color="black";
     h1.innerHTML="Login Form";
     asking.textContent="Signup"
     user.textContent="Don't have account ? Create a new one"
     isDisplayed = false;
    }
    else{
         removeEmail.style.display="block";
         removeConfirmPassword.style.display="block";
     SignupSwap.style.color="black";
     loginSwap.style.color="black";
     h1.innerHTML="Signup Form";
        asking.textContent="Login";
     user.textContent="Already have an account?";
     isDisplayed = true;
    }
})

// Swap to login-form using login button
var asking = document.getElementById('asking');
var user = document.getElementById('user');
var loginSwap = document.getElementById('login-swap');
var isDisplayed = true;
loginSwap.addEventListener('click', function(){
    var removeEmail = document.getElementById('email');
    var removeConfirmPassword = document.getElementById('confirm-password');
    if(isDisplayed) {
     removeEmail.style.display="none";
     removeConfirmPassword.style.display="none";
     loginSwap.style.color="black";
     SignupSwap.style.color="black";
     h1.innerHTML="Login Form";
     asking.textContent="Signup"
     user.textContent="Don't have account ? Create a new one"
     isDisplayed=false;
    }
})

// Swap to Signup-form using Signup button
var asking = document.getElementById('asking');
var user = document.getElementById('user');
var SignupSwap = document.getElementById('signup-swap');
SignupSwap.addEventListener('click', function(){
    var removeEmail = document.getElementById('email');
    var removeConfirmPassword = document.getElementById('confirm-password');
    if(!isDisplayed) {
     removeEmail.style.display="block";
     removeConfirmPassword.style.display="block";
     SignupSwap.style.color="black";
     loginSwap.style.color="black";
     h1.innerHTML="Signup Form";
     asking.textContent="Login"
     user.textContent="Already have an account? "
     isDisplayed=true;
    }
    
})



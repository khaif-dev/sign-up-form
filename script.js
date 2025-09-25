const signup_form = document.getElementById('signup');
const signup_link = document.getElementById('signup-link');
const login_form = document.getElementById('login');
const login_link = document.getElementById('login-link');
const forgot_password = document.getElementById('forgot-password')
const resetPasswordForm = document.getElementById('reset-password');
const remember_password = document.getElementById('remember-password');


// add event listener to login-link
login_link.addEventListener('click',(e)=>{
  e.preventDefault();
  // resetPasswordForm.style.display = 'none';
  signup_form.style.display = 'none';
  login_form.style.display = 'block';
});

// add event listener to signup link
signup_link.addEventListener('click',(e)=>{
  e.preventDefault();
  login_form.style.display ='none';
  signup_form.style.display = 'block';
})

// add event listener to forgot password link
forgot_password.addEventListener('click',(e)=>{
  e.preventDefault();
  login_form.style.display = 'none';
  resetPasswordForm.style.display = 'block';
});

// adding event listener to remember password link
remember_password.addEventListener('click',(e)=>{
  e.preventDefault();
  resetPasswordForm.style.display = 'none';
  login_form.style.display = 'block';
});



// validate user data as they input
const signup_email = document.getElementById('email');
const login_email = document.getElementById('email1');
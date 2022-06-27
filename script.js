let userPassword = document.getElementById('user_password').value;
let userPasswordCheck = document.getElementById('user_password_check').value;

function confirm() {
  if (userPassword !== userPasswordCheck) {
    alert("Passwords don't match, insert similar passwords!");
    
  }
}

const btn = document.querySelector('.btn');

btn.addEventListener("click", confirm);


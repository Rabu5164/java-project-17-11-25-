const password = document.querySelector('#password');
const toggle = document.querySelector('#togglepassword');

togglepassword.addEventListener('click', () => {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    togglepassword.classList.toggle('bi-eye');
    togglepassword.classList.toggle('bi-eye-slash');
});

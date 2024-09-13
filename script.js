document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').classList.add('show-login');
});

document.getElementById('showSignup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('container').classList.remove('show-login');
});

const passwordInput = document.getElementById('passwordInput');
const togglePassword = document.getElementById('togglePassword');

togglePassword.addEventListener('click', function () {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);


    this.src = type === 'password' ? 'sh.png' : 'hd.png';
});

function redirectToHome() {
    setTimeout(function() {
        window.location.href = 'home.html';
    }, 1000);
}
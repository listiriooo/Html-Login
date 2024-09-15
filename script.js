document.addEventListener('DOMContentLoaded', function() {
    
    const container = document.querySelector('.container');
    const showLogin = document.getElementById('showLogin');
    const showSignup = document.getElementById('showSignup');

    if (showLogin && showSignup && container) {
        showLogin.addEventListener('click', function() {
            container.classList.add('show-login');
        });

        showSignup.addEventListener('click', function() {
            container.classList.remove('show-login');
        });
    }

    const passwordInput = document.getElementById('passwordInput');
    const togglePassword = document.getElementById('togglePassword');

    if (passwordInput && togglePassword) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.src = type === 'password' ? 'sh.png' : 'hd.png';
        });
    }


    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (yesButton && noButton) {
        function moveButton(button) {
            const x = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
            const y = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
            button.style.position = 'absolute';
            button.style.left = `${x}px`;
            button.style.top = `${y}px`;
        }

        noButton.addEventListener('mouseenter', function() {
            moveButton(noButton);
        });

        yesButton.addEventListener('mouseenter', function() {
            moveButton(yesButton);
        });
    }
});

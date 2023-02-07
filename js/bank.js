document.getElementById("login-submit").addEventListener('click', function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;

    if (userEmail == 'mahdihassankhan10@gmail.com' && userPassword == 'bank101') {
        const para = document.getElementById("pass-check")
        para.innerText = '✅ Access Given';
        window.location.href = 'banking.html';
    }
    else {
        const para = document.getElementById("pass-check")
        para.innerText = '❌ Access Denied, Try Again';

    }

    emailField.value = "";
    passwordField.value = "";
})
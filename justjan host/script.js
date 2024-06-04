document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Hardgecodeerde gebruikersnaam en wachtwoord
    var correctUsername = 'jouwgebruikersnaam';
    var correctPassword = 'jouwwachtwoord';

    if (username === correctUsername && password === correctPassword) {
        window.location.href = 'server1.html';
    } else {
        document.getElementById('error-message').innerText = 'Ongeldige gebruikersnaam of wachtwoord.';
    }
});

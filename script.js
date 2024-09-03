document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtener los valores del formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Mensaje de respuesta
    const messageElement = document.getElementById('message');

    // Lógica de autenticación simple (solo para demostración)
    if (username === 'admin' && password === '1234') {
        messageElement.style.color = 'green';
        messageElement.textContent = 'Login exitoso. Bienvenido, ' + username + '!';
    } else {
        messageElement.style.color = 'red';
        messageElement.textContent = 'Nombre de usuario o contraseña incorrectos.';
    }
});

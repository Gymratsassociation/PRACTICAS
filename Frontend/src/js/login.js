// Captura el formulario de login
const loginForm = document.getElementById('login-form');

// Añade un evento para manejar el envío del formulario
loginForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Previene el comportamiento predeterminado del formulario

    // Obtén los valores de los campos de usuario y contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        // Envía los datos al backend para verificar el login
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            const user = await response.json();
            // Redirige a usuarios.html con el nombre del usuario en la URL
            window.location.href = `usuarios.html?username=${encodeURIComponent(user.username)}`;
        } else {
            const error = await response.json();
            document.getElementById('login-message').textContent = error.message || 'Credenciales incorrectas';
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        document.getElementById('login-message').textContent = 'Ocurrió un error. Inténtalo de nuevo.';
    }
});

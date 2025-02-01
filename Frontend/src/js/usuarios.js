document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    if (username) {
        header.textContent = `Bienvenido a tu zona personal, ${username}`;
    } else {
        header.textContent = 'Bienvenido a tu zona personal';
    }
});

// Obtén los datos del usuario de los parámetros de la URL
const params = new URLSearchParams(window.location.search);
const username = params.get('username');
const email = params.get('email');
const phone = params.get('phone');

// Actualiza la interfaz con los datos del usuario
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header h1');
    if (username) {
        header.textContent = `Bienvenido a tu zona personal, ${username}`;
    }

    // Rellena los campos de "Mis datos"
    document.querySelector('input[placeholder="Nombre"]').value = username || '';
    document.querySelector('input[placeholder="Email"]').value = email || '';
    document.querySelector('input[placeholder="Teléfono"]').value = phone || '';
});
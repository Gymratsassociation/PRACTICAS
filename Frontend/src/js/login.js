// URL base del backend
const API_URL = 'http://localhost:8080/api/users';

// Verifica que la URL esté definida correctamente
console.log('URL de la API:', `${API_URL}/all`);

// Función para obtener todos los usuarios
async function fetchUsers() {
  try {
    const response = await fetch(`${API_URL}/all`); // Ruta para obtener todos los usuarios
    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }
    const users = await response.json();
    console.log('Usuarios:', users);
    renderUsers(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error);
  }
}

// Función para buscar un usuario por nombre y contraseña
async function findUser(username, password) {
  try {
    const response = await fetch(`${API_URL}/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });
    if (!response.ok) {
      throw new Error('Usuario no encontrado o credenciales incorrectas');
    }
    const user = await response.json();
    console.log('Usuario encontrado:', user);
    alert(`Bienvenido, ${user.nombre}`);
    // Redirige a otra página si es necesario
    window.location.href = `usuarios.html?username=${encodeURIComponent(user.nombre)}`;
  } catch (error) {
    console.error('Error al buscar usuario:', error);
    alert('Usuario no encontrado o credenciales incorrectas');
  }
}

// Función para renderizar usuarios en la página
function renderUsers(users) {
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.nombre} (${user.email})`;
    userList.appendChild(li);
  });
}

// Llama a la función para obtener los usuarios al cargar la página
fetchUsers();

// Ejemplo de integración con botones en la interfaz
document.getElementById('find-user-button').addEventListener('click', () => {
  const username = document.getElementById('username-input').value;
  const password = document.getElementById('password-input').value;
  findUser(username, password);
});

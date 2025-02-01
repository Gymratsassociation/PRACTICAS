// URL base del backend
const API_URL = 'http://localhost:8080/api/users';

console.log('URL de la API:', `${API_URL}/all`); // Verifica que la URL base sea correcta

// Función para obtener todos los usuarios
async function fetchUsers() {
  try {
    console.log('Iniciando la solicitud para obtener usuarios...'); // Log antes de la solicitud
    const response = await fetch(`${API_URL}/all`); // Ruta para obtener todos los usuarios
    console.log('Respuesta recibida:', response); // Log de la respuesta del servidor

    if (!response.ok) {
      throw new Error('Error al obtener los usuarios');
    }

    const users = await response.json();
    console.log('Usuarios obtenidos:', users); // Log de los usuarios obtenidos
    renderUsers(users);
  } catch (error) {
    console.error('Error al obtener usuarios:', error); // Log de errores
  }
}

// Función para buscar un usuario por nombre y contraseña
async function findUser(username, password) {
  try {
    console.log(`Buscando usuario con username: ${username} y password: ${password}`); // Log de credenciales
    const response = await fetch(`${API_URL}/find`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    console.log('Respuesta del servidor al buscar usuario:', response); // Log de la respuesta

    if (!response.ok) {
      throw new Error('Usuario no encontrado o credenciales incorrectas');
    }

    const user = await response.json();
    console.log('Usuario encontrado:', user); // Log del usuario encontrado
    alert(`Bienvenido, ${user.nombre}`);
  } catch (error) {
    console.error('Error al buscar usuario:', error); // Log de errores
  }
}

// Función para renderizar usuarios en la página
function renderUsers(users) {
  console.log('Renderizando usuarios...'); // Log antes de renderizar
  const userList = document.getElementById('user-list');
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = `${user.nombre} (${user.email})`;
    userList.appendChild(li);
  });
  console.log('Usuarios renderizados con éxito.'); // Log después de renderizar
}

// Llama a la función para obtener los usuarios al cargar la página
fetchUsers();

// Ejemplo de integración con botones en la interfaz
document.getElementById('find-user-button').addEventListener('click', () => {
  const username = document.getElementById('username-input').value;
  const password = document.getElementById('password-input').value;
  console.log('Botón de buscar usuario presionado'); // Log de interacción del botón
  findUser(username, password);
});

// URL base del backend
const API_URL = 'http://localhost:8080/api/users';
// Función para obtener todos los usuarios
async function fetchUsers() {
    try {
        const response = await fetch(`${API_URL}/all`); // Ruta para obtener todos los usuarios
        if (!response.ok) throw new Error('Error al obtener los usuarios');
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
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });
        if (!response.ok) throw new Error('Usuario no encontrado o credenciales incorrectas');
        const user = await response.json();
        console.log('Usuario encontrado:', user);
        alert(`Bienvenido, ${user.nombre}`);
    } catch (error) {
        console.error('Error al buscar usuario:', error);
    }
}
// Función para registrar un nuevo usuario
async function registerUser(nombre, email, contrase\u00f1a, telefono) {
    try {
        const response = await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre,
                email,
                contrase\u00f1a,
                telefono
            })
        });
        if (!response.ok) throw new Error('Error al registrar usuario');
        const result = await response.json();
        console.log('Usuario registrado:', result);
        alert("Usuario registrado con \xe9xito");
        fetchUsers(); // Recargar la lista de usuarios
    } catch (error) {
        console.error('Error al registrar usuario:', error);
    }
}
// Función para actualizar el nombre de un usuario
async function updateUserUsername(id, nuevoNombreUsuario) {
    try {
        const response = await fetch(`${API_URL}/update`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                nuevoNombreUsuario
            })
        });
        if (!response.ok) throw new Error('Error al actualizar el nombre de usuario');
        const result = await response.json();
        console.log('Usuario actualizado:', result);
        alert("Nombre de usuario actualizado con \xe9xito");
        fetchUsers(); // Recargar la lista de usuarios
    } catch (error) {
        console.error('Error al actualizar el usuario:', error);
    }
}
// Función para eliminar un usuario por ID
async function deleteUserById(id) {
    try {
        const response = await fetch(`${API_URL}/delete`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        });
        if (!response.ok) throw new Error('Error al eliminar usuario');
        const result = await response.json();
        console.log('Usuario eliminado:', result);
        alert("Usuario eliminado con \xe9xito");
        fetchUsers(); // Recargar la lista de usuarios
    } catch (error) {
        console.error('Error al eliminar usuario:', error);
    }
}
// Función para renderizar usuarios en la página
function renderUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach((user)=>{
        const li = document.createElement('li');
        li.textContent = `${user.nombre} (${user.email})`;
        userList.appendChild(li);
    });
}
// Llama a la función para obtener los usuarios al cargar la página
fetchUsers();
// Ejemplo de integración con botones en la interfaz
document.getElementById('find-user-button').addEventListener('click', ()=>{
    const username = document.getElementById('username-input').value;
    const password = document.getElementById('password-input').value;
    findUser(username, password);
});
document.getElementById('register-user-button').addEventListener('click', ()=>{
    const nombre = document.getElementById('name-input').value;
    const email = document.getElementById('email-input').value;
    const contrase\u00f1a = document.getElementById('password-input').value;
    const telefono = document.getElementById('phone-input').value;
    registerUser(nombre, email, contrase\u00f1a, telefono);
});

//# sourceMappingURL=index.de5c0784.js.map

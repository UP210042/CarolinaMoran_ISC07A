// Elementos HTML
const userSelect = document.getElementById('select-users');
const userContainer = document.getElementById('user-container');
const taskContainer = document.getElementById('task-container');
const displayButton = document.getElementById('btndisplay');

// Función para mostrar información cuando se selecciona un usuario
userSelect.addEventListener('click', () => {
    // Llama a la función para obtener y mostrar la información del usuario
    getUserInfo(userSelect.value);
});

// Función para cambiar la visibilidad del contenedor de tareas
displayButton.addEventListener('click', () => {
    if (taskContainer.style.visibility === 'visible') {
        taskContainer.style.visibility = 'hidden';
    } else {
        taskContainer.style.visibility = 'visible';
    }
});

// Función para obtener y mostrar la información del usuario
async function getUserInfo(userId) {
    try {
        // Obtiene la información del usuario
        const userInfo = await getUser(userId);

        // Muestra la información en el contenedor de usuario
        const fullName = userContainer.children[1].children[0].children[0];
        const email = userContainer.children[1].children[1].children[0];
        fullName.textContent = `¡Hola ${userInfo.firstname} ${userInfo.lastname}!`;
        email.textContent = `Tu correo es: ${userInfo.email}`;

        // Obtiene y muestra las tareas del usuario
        const userTasks = await getTasks(userId);
        showUserTasks(userTasks);
    } catch (error) {
        console.error('Ocurrió un error al obtener la información del usuario:', error);
    }
}

// Función para mostrar las tareas del usuario
function showUserTasks(tasks) {
    // Oculta el contenedor de tareas si no hay tareas
    if (tasks.length === 0) {
        taskContainer.style.visibility = 'hidden';
        return;
    }

    // Muestra el contenedor de tareas
    taskContainer.style.visibility = 'visible';

    // Limpia la lista de tareas anteriores
    const taskList = taskContainer.children[1];
    taskList.innerHTML = '';

    // Agrega las nuevas tareas a la lista
    tasks.forEach(task => {
        const listItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        listItem.innerText = `${task.id}. ${task.title}`;
        if (task.completed) {
            checkbox.checked = true;
        }
        listItem.appendChild(checkbox);
        taskList.appendChild(listItem);
    });
}

// Función para obtener todos los usuarios
function getAllUsers() {
    return fetch('/data/usuarios.json')
        .then(resp => resp.json());
}

// Función para obtener un usuario por su ID
function getUser(userId) {
    return fetch('/data/usuarios.json')
        .then(resp => resp.json())
        .then(users => users.find(user => user.id == userId));
}

// Función para obtener todas las tareas
function getAllTasks() {
    return fetch('/data/tareas.json')
        .then(resp => resp.json());
}

// Función para obtener las tareas de un usuario por su ID
function getTasks(userId) {
    return fetch('/data/tareas.json')
        .then(resp => resp.json())
        .then(tasks => tasks.filter(task => task.userId == userId));
}

// Pakt de benodigde HTML-elementen
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Taak toevoegen met knop of enter
function addTask() {
    const taskText = taskInput.value.trim();

    // Controleert of het invoerveld niet leeg is
    if (taskText !== '') {
        // 1. Maak een nieuwe li aan
        const li = document.createElement('li');
        li.textContent = taskText;

        // 2. Maak een wis-knop voor de li
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Wis';

        // 3. Taak verdwijnt zodra je op de wis-knop klikt
        deleteButton.addEventListener('click', function() {
            taskList.removeChild(li);
        });

        // 4. Voegt de wis-knop toe aan de taak
        li.appendChild(deleteButton);

        // 5. Voegt een taak toe aan de hoofdlijst
        taskList.appendChild(li);

        // 6. Maakt het invoerveld leeg voor de volgende taak
        taskInput.value = '';
    }
}

// Checkt of er op de addButton wordt geklikt
addButton.addEventListener('click', addTask);

// Zorgt ervoor dat je enter kunt gebruiken in tekstvak
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
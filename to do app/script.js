// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('task');
    const dueDateInput = document.getElementById('dueDate');
    const taskText = taskInput.value.trim();
    const dueDate = dueDateInput.value;

    if (taskText !== '') {
        const taskItem = document.createElement('li');
        const currentTime = new Date();
        taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="due-date">Due: ${dueDate}</span>
            <span class="timestamp">Added: ${currentTime.toLocaleString()}</span>
            <span>
                <button class="complete-button" onclick="completeTask(this)">Complete</button>
                <button class="edit-button" onclick="editTask(this)">Edit</button>
                <button class="delete-button" onclick="deleteTask(this)">Delete</button>
            </span>
        `;

        pendingList.appendChild(taskItem);
        taskInput.value = '';
        dueDateInput.value = '';
    }
}

// Function to mark a task as completed
function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    const completedList = document.getElementById('completedList');
    completedList.appendChild(taskItem);
    button.remove();
    completedTasksSection.style.display = 'block';
}

// Function to edit a task
function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector('.task-text');
    const newTaskText = prompt('Edit the task:', taskText.textContent);

    if (newTaskText !== null) {
        taskText.textContent = newTaskText;
    }
}

// Function to delete a task
function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}

// Initialize the app
addTask(); // You can add initial tasks here if needed

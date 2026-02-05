let taskList = [];

const addToObj = () => {
    const task = {
        id: Date.now(),  
        name: document.getElementById('n').value,
        description: document.getElementById('d').value,
        date: document.getElementById('date').value,
        startTime: document.getElementById('s').value, 
        endTime: document.getElementById('e').value     
    };
    taskList.push(task);
    clearInputs();
    displayTasks();
}

function displayTasks() {
    const taskContainer = document.getElementById('taskContainer');
    taskContainer.innerHTML = '';

    taskList.forEach(task => {  
        const taskElement = `
            <div class="task-card">
                <h3>${task.name}</h3>
                <p><strong>Description:</strong> ${task.description}</p>
                <p><strong>Date:</strong> ${task.date}</p>
                <p><strong>Start Time:</strong> ${task.startTime}</p>
                <p><strong>End Time:</strong> ${task.endTime}</p>
                <button onclick="deleteTask(${task.id})" class="delete-btn">Delete</button>
            </div>
        `;
        taskContainer.innerHTML += taskElement;
    });
}

function deleteTask(taskId) {
    taskList = taskList.filter(task => task.id !== taskId);
    displayTasks();
}

const clearInputs = () => {
    document.getElementById('n').value = '';
    document.getElementById('d').value = '';
    document.getElementById('date').value = '';
    document.getElementById('s').value = '';
    document.getElementById('e').value = '';

}

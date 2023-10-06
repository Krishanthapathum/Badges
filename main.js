consol.log("Hello world")

// Define an array to store notes
let notes = [];

// Function to render notes
function renderNotes() {
    const notesList = document.getElementById("notes-list");
    notesList.innerHTML = "";

    notes.forEach((note, index) => {
        const noteItem = document.createElement("div");
        noteItem.classList.add("note-item");
        noteItem.innerHTML = `
            <div class="note-title">${note.title}</div>
            <div class="note-content">${note.content}</div>
            <div class="note-actions">
                <button class="edit-button" onclick="editNote(${index})">Edit</button>
                <button class="delete-button" onclick="deleteNote(${index})">Delete</button>
            </div>
        `;
        notesList.appendChild(noteItem);
    });
}

// Function to add a new note
function addNote() {
    const title = document.getElementById("note-title").value;
    const content = document.getElementById("note-content").value;
    if (title.trim() !== "" && content.trim() !== "") {
        notes.push({ title, content });
        renderNotes();
        clearForm();
    }
}

// Function to edit an existing note
function editNote(index) {
    const editedTitle = prompt("Edit title:", notes[index].title);
    const editedContent = prompt("Edit content:", notes[index].content);
    if (editedTitle !== null && editedContent !== null) {
        notes[index].title = editedTitle;
        notes[index].content = editedContent;
        renderNotes();
    }
}

// Function to delete a note
function deleteNote(index) {
    const confirmDelete = confirm("Are you sure you want to delete this note?");
    if (confirmDelete) {
        notes.splice(index, 1);
        renderNotes();
    }
}

// Function to clear the input form
function clearForm() {
    document.getElementById("note-title").value = "";
    document.getElementById("note-content").value = "";
}

// Event listener for form submission
document.getElementById("note-form").addEventListener("submit", function (e) {
    e.preventDefault();
    addNote();
});

// Initial rendering of notes
renderNotes();



// Define an array to store the list of tasks
const tasks = [];

// Function to add a task to the list
function addTask(taskText) {
    const task = {
        text: taskText,
        completed: false
    };
    tasks.push(task);
}

// Function to display the tasks in the HTML
function displayTasks() {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear the existing list

    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" id="task${index}" ${task.completed ? "checked" : ""}>
            <label for="task${index}" ${task.completed ? 'style="text-decoration: line-through;"' : ''}>${task.text}</label>
            <button onclick="removeTask(${index})">Delete</button>
        `;
        taskList.appendChild(listItem);
    });
}

// Function to mark a task as complete
function completeTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

// Function to remove a task from the list
function removeTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}

// Handle form submission to add a new task
document.getElementById("task-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const taskText = document.getElementById("task-text").value;
    if (taskText.trim() !== "") {
        addTask(taskText);
        displayTasks();
        document.getElementById("task-text").value = "";
    }
});

// Initial display of tasks
displayTasks();

//////

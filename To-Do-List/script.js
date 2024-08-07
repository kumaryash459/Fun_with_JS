function tasking() {
    let value = document.getElementById('task').value;

    if (value.trim() === "") {
        alert('Type something');
        return
    } else {
        var taskItem = document.createElement('li');
        taskItem.textContent = value; // Use textContent for plain text
        document.getElementById('listing').appendChild(taskItem); // Append to the correct parent
        document.getElementById('task').value = ''; // Clear the input field
    }
}
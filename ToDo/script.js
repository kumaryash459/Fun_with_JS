const input = document.getElementById("inputField")
const add = document.getElementById('add')
const todo = document.getElementById('todolist')

add.addEventListener('click', function(e){
    e.preventDefault();
    let value = input.value
    console.log(value);
    
    if(value.trim() === "" ){
        alert('Please enter any task in To Do List')
        return;
    }

    let newList = document.createElement('li');
    newList.className = 'flex mb-4 items-center text-white';
    newList.innerText = value

    let span = document.createElement('span');
    span.className = 'w-full'
    span.textContent = value
})

document.body.style.backgroundColor = '#414141'






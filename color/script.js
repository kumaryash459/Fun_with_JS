document.body.style.backgroundColor = '#414141'
const button = document.getElementById('submit');
button.addEventListener('click', () => {
    const name = document.getElementById('username');
    const nameValue = name.value.trim();
    
    
    if (nameValue === '') {
        alert('Please enter your name');
        return;
    }
    // adding local storage
    localStorage.setItem('name', nameValue);

    const para = document.getElementById('para');
    const displayName = document.createElement('li');
    para.appendChild(displayName);
    displayName.className = 'border';
    displayName.textContent = `Hello ${name.value}`;

    name.value = '';
    
});
window.addEventListener('load', ()=>{
    const storedname = localStorage.getItem('name');
    if(storedname){
        const displayname = document.createElement('li')
        displayname.className = 'border'
        displayname.textContent = `Hello ${storedname}`
        para.appendChild(displayname)
    }
})
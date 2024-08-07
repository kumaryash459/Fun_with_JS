const button = document.getElementById('button')
const notes_container = document.getElementById('notes-container')
let notes = document.querySelectorAll('.input-box')
button.addEventListener('click', ()=>{
    let para = document.createElement('p')
    let img = document.createElement('img')
    let imgOfBold = document.createElement('img')
    localStorage.setItem('para', para)
    localStorage.setItem('imgOfBold', imgOfBold)
    
    imgOfBold.className = 'bold'
    img.className = 'delete'
    para.className = 'input-box'
    
    para.setAttribute('contenteditable', 'true')
    imgOfBold.src = "images/bold.png"
    img.src = "images/delete.png"
    
    notes_container.appendChild(para).appendChild(img)
    para.appendChild(imgOfBold)
    
    img.addEventListener('click', (e)=>{ 
        e.target.parentNode.remove()
    })

    imgOfBold.addEventListener('click', (e) => {
        const parent = e.target.parentNode;
        parent.style.fontWeight = parent.style.fontWeight === 'normal' ? 'bold' : 'normal';
      }); 
})
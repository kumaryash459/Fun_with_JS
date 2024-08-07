const nextButton = document.getElementById('nextBtn')
const backButton = document.getElementById('backBtn')
const scrollContainer = document.querySelector('.container')
scrollContainer.addEventListener('wheel', (e)=>{
    e.preventDefault();
    scrollContainer.style.scrollBehavior = 'auto'
    scrollContainer.scrollLeft += e.deltaY 
})
nextButton.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft += 900
})
backButton.addEventListener('click', (e)=>{
    e.preventDefault();
    scrollContainer.style.scrollBehavior = 'smooth'
    scrollContainer.scrollLeft -= 900
})

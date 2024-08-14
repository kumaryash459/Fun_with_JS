const div = document.getElementById('div')
document.body.addEventListener('click', function(e){
    e.preventDefault();
    const Xaxis = e.clientX
    const Yaxis = e.clientY
    // console.log(Xaxis,Yaxis);
    
    const div1 = document.createElement('div');

    function NumberRandom(){
        for(let i = 0; i<10; i++){

            const Rnumber = Math.round((Math.random())*100 + 1)
            if(Rnumber > 70 && Rnumber <= 100){
                return Rnumber
            }
        }

        // console.log(Rnumber);
        
    }

    const NumberVal = NumberRandom()
    console.log(NumberVal);
    
   
    
    
    div1.style.border = '1px solid red'
    div1.style.position = 'absolute'
    div1.style.left = Xaxis + 'px'
    div1.style.top = Yaxis + 'px'
    div1.style.borderRadius = "50%"
    div1.style.width = NumberVal + 'px'
    div1.style.height = NumberVal + 'px'
    div1.style.display = "block"
    div.appendChild(div1)
    

    // function getAxis(){
    //    const axis = {
    //     left: div1.style.left,
    //     top: div1.style.top
    //    }
    //    console.log(axis);
       
    // }
    // getAxis()
})
document.body.style.backgroundColor = "#414141"
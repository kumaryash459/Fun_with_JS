
function randomPassword(includeNumbers = false,){
    let pass = "";
    let length = 8;
    let numbers = '1234567890';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if(includeNumbers){
        str+= numbers
    }

    for (let i = 1; i <= length; i++) {       
        let char = Math.floor(Math.random() * str.length);       
        pass = pass + str.charAt(char);
        document.getElementById('display')
        display.value = pass
        }
    }  
document.getElementById('passButton').addEventListener('click', function(e){
    e.preventDefault();
    randomPassword()
})






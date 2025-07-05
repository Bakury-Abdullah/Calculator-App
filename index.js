let screen = document.querySelector("input")
    
function buttonInput(number){
    screen.value += number
}

function resetDisplay(){
    screen.value = ""
}

function deleteChar(){
    screen.value = screen.value.slice(0, -1)
}

function operationSubmit(){
    try{
    screen.value = eval(screen.value)
    }catch(error){
        screen.value = "Error";
    } 
}
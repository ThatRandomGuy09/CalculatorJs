function display(value){
    document.getElementById('text-area').value+=value
}

function calculate(value){
    var value = document.getElementById('text-area').value
    var answer = eval(value)
    document.getElementById('text-area').value=answer
}

function clr(){
    document.getElementById('text-area').value=''
}
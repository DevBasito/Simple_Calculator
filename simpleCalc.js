let screen = document.getElementById('screen');


function append(x) {
    screen.value += x;
}

function cancel() {
    screen.value = "";
}

function calculate() {
    let x= eval(screen.value)
    screen.value= x;
}

function percent() {
    let y = eval(screen.value)/100;
    screen.value= y; 
}

function del() {
    let y= screen.value;
    screen.value= y.slice(0, -1)
}
function add (a,b){
    return parseInt(a)+parseInt(b);
}

function subtract(a,b){
    return parseInt(a)-parseInt(b);
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate(func,a,b){
    if(func == ""){
        return "ERROR"
    }
    if(func == divide && b == 0){
        return "oh noes!"
    }
    state[3] = func(a,b)
    display.innerText = state[3];
    state[0] = state[3];
    return state[3];
}


let display = document.getElementById('display')
let state = ["", "", "", ""];

function addNumber(x){
    if(state[2] == "" && state[1] == ""){
        state[0] += x
        display.innerText = state[0]
    }
    else if(state[2] == "" && state[0] != ""){
        state[0] = ""
        state[1] = ""
        state[0] += x
        display.innerText = state[0]
    }else if(state[2] != "" && state[0] != ""){
        state[1] += x
        display.innerText = state[1]
    }else if(state[2] == "" && state[0] != "") {
        state[1] = ""
        display.innerText = state[1]
    }
}

function addOperator(y){
    if(y == "÷"){
        state[2] = divide
        state[1] =""
    }
    else if(y == "×"){
        state[2] = multiply
        state[1] =""
    }
    else if(y == "+"){
        state[2] = add
        state[1] =""
    }
    else if(y == "-"){
        state[2] = subtract
        state[1] =""
    }
    if(y == "c"){
        state = ["","","",""]
        display.innerText =""
    }
    if(y == "="){
        operate(state[2], state[0], state[1])
    }
}

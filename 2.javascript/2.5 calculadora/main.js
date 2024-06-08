// variavel que armazena o elemento do HTML que tem o ID #display
var display = document.getElementById("display");
// variavel que armazena o elemento do HTML que tem o ID #memoryValue
var memoryValueDisplay = document.getElementById("memoryValue");
// variavel que armazena o elementod do HTML que tem o ID #memoryOp
var memoryOpDisplay = document.getElementById("memoryOp");

// variavel que armazena o valor na memoria da calculadora
var memoryValue = NaN;
// variavel que armazena qual operacao foi selecionada
var memoryOp = "";

// retorna o valor atualmente presente no display principal
const getCurrentValue = () => {
    return display.innerHTML;
}

// retorna o valor que está na memoria da calculadora
const getmemoryValueValue = () => {
    return memoryValue;
}

// verifica se o display principal está vazio ou não (ou com outros valores não utilizaveis)
const isDisplayEmpty = () => {
    let value = getCurrentValue();
    return value == "" || value == "0" || value == "Infinity" || value == "Undefined";
}

// verifica se tem algum valor guardado na memoria
const isMemoryValueEmpty = () => {
    return isNaN(memoryValue);
}

// verifica se tem alguma operacao armazenada na memoria
const isMemoryOpEmpty = () => {
    return memoryOp == "";
}

// atualiza o display principal com o parametro value
const updateDisplay = (value) => {
    display.innerHTML = value;
} 

// atualiza o valor armazenado na memoria
const updatemMemoryValue = (value) => {
    memoryValue = value;
    memoryValueDisplay.innerHTML = isNaN(value) ? '' : value;
}

// atualiza a operacao armazenada na memoria
const updatemMemoryOp = (op) => {
    memoryOp = op;
    memoryOpDisplay.innerHTML = op;
}

// codigo para adicionar à todos os botoes a mesma funcao:
//   1. pegamos todos os elementos da página com a classe .button
//   2. transformamos essa colecao de elementos HTML em uma lista do Javascript
//   3. percorremos essa lista e adicionamos a cada elemento uma funcao no evento onClick
var buttonsHtmlCollection = document.getElementsByClassName("button");
var buttons = [].slice.call(buttonsHtmlCollection);
buttons.forEach(button => {
    button.onclick = () => {
        let value = button.value;
        buttonListener(value);
    }
});

// funcao que lida com o que fazer sempre que uma operacao é clickada
const clickOnOperation = (op) => {
    if (!isMemoryValueEmpty()) {
        // update op
        updatemMemoryOp(op);
    } else if (!isDisplayEmpty()) {
        // update op
        // update display -> memory and zero display
        updatemMemoryOp(op);
        updatemMemoryValue(getCurrentValue());
        updateDisplay("0");
    }
}

// funcao que executa as operacoes matematicas dada os valores armazenados na memoria e/ou display
/* ==========================================================================================
    A FAZER
   ==========================================================================================
*/ 
const execOperation = () => {
    let value = parseFloat(getCurrentValue());
    let memory = memoryValue;
    switch(memoryOp) {
        // A FAZER:
        // fazer as funcoes matematicas nescessarias
        case "x2":
            return value
        case "sqrt":
            return value;
        case "!":
            return value;
        case "/":
            return value;
        case "x":
            return value;
        case "-":
            return value;
        case "+":
            return value;
    }
}

// funcao que é chamada sempre que um botao é clickado, executa os comandos respectivos
/* ==========================================================================================
    A FAZER
   ==========================================================================================
*/ 
const buttonListener = (op) => {
    switch(op) {
        // A FAZER:
        // x ao quadrado, raiz quadrada e fatorial tem comportamentos similares no sentido de que não precisam de um valor na memória para funcionar, como proceder?        
        case "x2":
        case "sqrt":
        case "!":
            break;
        case "/":
        case "x":
        case "-":
        case "+":
            clickOnOperation(op);
            break;
        case "=":
            if (!isMemoryValueEmpty()) {
                // A FAZER:
                // o que fazer quando temos uma operacao selecionada e um valor na memoria? 
                // dica: usar a funcao execOperation()
            }
            break;
        case "CE":
            updateDisplay("0");
            updatemMemoryOp("");
            updatemMemoryValue(NaN);
            break;
        case "back":
            if (!isDisplayEmpty()) {
                // A FAZER:
                // como dar backspace no display principal?
            }
            break;
        default:
            // default nesse caso são os numeros
            if (isDisplayEmpty()) {
                updateDisplay(op);
            } else {
                let newValue = `${getCurrentValue()}${op}`;
                updateDisplay(newValue);
            }
            break;
    }
}
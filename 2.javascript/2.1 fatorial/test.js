let output = document.getElementById("output");

const updateOutput = (html) => {
    output.innerHTML = html;
}

const run = () => {
    try {
        let n = parseFloat(prompt("Value: "));
        let ret = factorial(n);
        updateOutput(ret);
    } catch (e) {
        updateOutput("<div style='color: red; font-family: Courier New; font-weight: bold;'>" + e +  "</div>");
    }
}
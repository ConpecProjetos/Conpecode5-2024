let output = document.getElementById("output");

const updateOutput = (html) => {
    output.innerHTML = html;
}

const run = () => {
    try {
        let n = parseInt(prompt("Value: "));
        let ret = raizQuadrada(n, 20);
        updateOutput(ret);
    } catch (e) {
        updateOutput("<div style='color: red; font-family: Courier New; font-weight: bold;'>" + e +  "</div>");
    }
}
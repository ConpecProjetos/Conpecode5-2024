const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function ColoredButton({ color }) {
    function handleClick() {
        alert(color);
    }

    return (
        <button style={{backgroundColor: color,}} className="coloredButton" onClick={handleClick}>
            {color}
        </button>
    )
}


function Main({ colors }) {
    return (
        <div className="container">
            {colors.map((color) => <ColoredButton color={color}/>)}
        </div>
    );
}

function rgbString(rgb) {
    return "rgb(" + rgb[0] + ", " + rgb[1] + ", " + rgb[2] + ")";
}

let rgb = [255, 0, 0];
let index = 0;
const buttonQuantity = 20;
const step = parseInt(255 / buttonQuantity);
let colors = [];
for (let i = 0; i < 3; i++) {
    colors.push(rgbString(rgb));
    for (; rgb[i] < 256; rgb[i] += step) {
        colors.push(rgbString(rgb));
    }
    let j = i + 1 > 2 ? 0 : i + 1;
    for (; rgb[j] < 256; rgb[j] += step) {
        colors.push(rgbString(rgb));
    }
    for (; rgb[i] > 0; rgb[i] -= step) {
        colors.push(rgbString(rgb));
    }
}

root.render(<Main colors={colors}/>);
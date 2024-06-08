const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);

function Circle({x, y, color, radius}) {
    return (
        <div className="circle" style={{
            position: "absolute",
            backgroundColor: color,
            marginLeft: x + "px",
            marginTop: y + "px",
            width: radius,
            height: radius,
            borderRadius: "100%",
        }}></div>
    )
}

function Circles() {
    const [quantity, setQuantity] = React.useState(0);
    const [circles, setCircles] = React.useState([]);

    function handleClick() {
        let temp = []
        for (let i = 0; i < quantity; i = i + 1) {
            temp.push(<Circle x={Math.random() * 400} y={Math.random() * 400} color={`rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`} radius={(Math.random() * 5 ) + "em"}/>);
        }
        setCircles(temp);
    }

    return (
        <div id="container">
            <div id="controller">
                <input type="number" onInput={event => setQuantity(event.target.value)}/>
                <button className="generate" onClick={handleClick}>Generate Circles!</button>
            </div>
            <div id="circles">
                {circles.map(circle => circle)}
            </div>
        </div>
    )
}

root.render(<Circles/>)
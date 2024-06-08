const app = document.getElementById("app");
const root = ReactDOM.createRoot(app);


function Login() {
    return (
        <div id="card">
            <h1>Login</h1>
            <input type="text" placeholder="Email" onInput={}/>
            <input type="password" placeholder="Password" onInput={}/>
            <button className="submit" onClick={}>Login</button>
        </div>
    )
}

root.render(
    <div id="container">
        <Login/>
    </div>
);
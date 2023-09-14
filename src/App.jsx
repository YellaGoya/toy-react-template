import logo from "./logo.svg";
import * as b from "./Base";
import * as f from "./FontWave";

// SetInterval(() => {
//     document.getElementById("test").style.fontWeight = 100;
//     document.getElementById("test").style.fontWeight = 200;
//     document.getElementById("test").style.fontWeight = 300;
//     document.getElementById("test").style.fontWeight = 400;
//     document.getElementById("test").style.fontWeight = 500;
//     document.getElementById("test").style.fontWeight = 600;
//     document.getElementById("test").style.fontWeight = 700;
// }, 1000);

function App() {
    return (
        <>
            <b.App>
                <b.AppHeader>
                    <b.AppLogo src={logo} className="App-logo" alt="logo" />
                    <f.FontWave id="test">YellaGoya</f.FontWave>
                    <br />+ ESLint : XO
                    <br />+ Prettier hello
                    <br />+ Styled Component
                </b.AppHeader>
            </b.App>
        </>
    );
}

export default App;

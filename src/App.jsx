import logo from "./logo.svg";
import * as s from "./Style";

function App() {
    return (
        <>
            <s.App>
                <s.AppHeader>
                    <s.AppLogo src={logo} className="App-logo" alt="logo" />
                    <p>template for roscoe</p>
                    + ESLint : XO
                    <br />+ Prettier hello
                    <br />+ Styled Component
                </s.AppHeader>
            </s.App>
        </>
    );
}

export default App;

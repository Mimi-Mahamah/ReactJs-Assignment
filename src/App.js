import logo from "./images/bg-intro-desktop.png"
import "./App.css"




function App() {
    return ( < div className = "App bg-image" >
        <
        header >

        <
        h1 > Learn to code by watching others < /h1> <
        p > See how experienced developers solve problems in real - time.Watching scripted tutorials is great, but understanding how developers think is invaluable. < /p> < /
        header > <
        main >
        <
        button >
        <
        strong > Try it free 7 days < /strong> then $20/mo.thereafter <
        /button> <
        form >
        <
        input type = "text"
        placeholder = "First Name" / >
        <
        input type = "text"
        placeholder = "Last Name" / >
        <
        input type = "email"
        placeholder = "Email Address" / >
        <
        input type = "password"
        placeholder = "Password" / >
        <
        input type = "submit"
        defaultValue = "CLAIM YOUR FREE TRIAL" / >
        <
        /form> < /
        main > <
        footer >
        <
        h6 > By clicking the button, you are agreeing to our <
        div id = "terms" > Terms and Services < /div> < /
        h6 > <
        /footer> < /
        div >
    )
};




export default App;
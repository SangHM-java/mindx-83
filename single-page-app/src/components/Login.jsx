import { useState } from "react"
import "../App.css"

const user = {
    name: "mindx",
    pass: "1234",
    role: "admin"
}

export default function Login(props) {

    const loginSuccess = props.loginSuccess;

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")

    const login = (e) => {
        console.log("Login");

        if(name != user.name){
            alert("Tai khoan khong ton tai")
            return
        }

        if(pass != user.pass){
            alert("Mat khau khong chinh xac")
            return
        }

        // Login success
        //e.preventDefault();

        alert("Dang nhap thanh cong")
        localStorage.setItem("user", JSON.stringify(user));
        loginSuccess(user);
        
    }

    const onChangePass = (e) => {

        let v = e.target.value;

        setPass(v);
    }

    return (
        <div className="login">
            <h1>Login</h1>
            <form onSubmit={login} className="login-form">
                <span>Username</span>
                <input type="text" value={name} onChange={event => setName(event.target.value)}/>
                <span>Password</span>
                <input type="password" value={pass} onChange={e => onChangePass(e)} />
                <input type="submit" value="Login"/>
            </form>
        </div>
    )
}
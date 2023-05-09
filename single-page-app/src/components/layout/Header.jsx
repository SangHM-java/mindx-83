import { useEffect } from "react";
import { useState } from "react"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Header(props) {
    const [user, setUser] = useState(props.user)
    const [total,setTotal] = useState(props.listPCart.length)
    
    console.log(user);

    useEffect(()=>{
        //setTotal(props.listPCart.length)
        if(props.listPCart){
            setTotal(props.listPCart.length)
        }
    },[props])

    let localUser = JSON.parse(localStorage.getItem("user"));
    console.log(localUser);
    return (
        <div className="header">
            {user && (
                <div>
                    <input type="text" onChange={(e) => { props.filter(e.target.value) }} />
                    <span>nameAAA: {user.name}</span>
                    <span>role: {user.role}</span>
                   
                </div>
            )}

            {
                localUser && (
                    (
                        <div>
                            <input type="text" onChange={(e) => { props.filter(e.target.value) }} />

                            <span>name: {localUser.name}</span>
                            <span>role: {localUser.role}</span>

                        </div>
                    )
                )
            }
             {<strong>Total: {total} - sp</strong>}
        </div>
    )
}
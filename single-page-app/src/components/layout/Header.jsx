import { useState } from "react"

export default function Header(props){
    const [user,setUser] = useState(props.user)
    console.log(user);

    let localUser = JSON.parse(localStorage.getItem("user"));
    console.log(localUser);
    return (
        <div className="header">
            {user && (
                <div>
                    <span>name: {user.name}</span>
                    <span>role: {user.role}</span>
                </div>
            )}

            {
                localUser && (
                    (
                        <div>
                            <span>name: {localUser.name}</span>
                            <span>role: {localUser.role}</span>
        
                        </div>
                    )
                )
            }
        </div>
    )
}
import { useState } from "react"
import { useEffect } from "react"

export default function Dashboard(props) {

    const [count, setCount] = useState(0)
    const [message, setMessage] = useState("")
    const [total, setTotal] = useState(0)
    const price = 15

    // Initialization
    // Ngay sau khi component duoc render
    useEffect(() => {
        console.log("Ngay sau khi component duoc render")

    })

    useEffect(()=>{
        
    }, [props])

    useEffect(()=>{
        setTotal(price*count)
        if (count >= 10) {
            setMessage("So luong san pham khong du")
        } else {
            setMessage("")
        }
    },[count])

    useEffect(()=>{
        if(count > 10) return;
        if(total > 50) {
            if (price * count > 50) {
                setMessage("Ban duoc giam 50%")
            } else {
                setMessage("")
            }
        }
    },[total])

    // Clean up
    useEffect(() => {
        const exc = setTimeout(()=>{
            console.log("Thuc thi sau 3s");
        }, 4000)
        return clearTimeout(exc)
    })

    return (
        <div>
            <h1>Board</h1>
            <p>Gia tri cua Count: {count}</p>
            <button onClick={() => {
                
                setCount(prev => {
                    return prev + 1
                })
            }}> + </button>
            <button onClick={() => {
                if (count < 10) {
                    setMessage("")
                } else {
                    setMessage("So luong san pham khong du")
                }
                setCount(prev => {
                    return prev - 1
                })
            }}> - </button>

            <span>Don gia: {total}</span>
            {message && (
                <div style={{ width: 200, height: 200, backgroundColor: "yellow", position: "fixed", top: "20%", left: "20%" }}>
                    <p>{message}</p>
                </div>
            )}
        </div>
    )
}
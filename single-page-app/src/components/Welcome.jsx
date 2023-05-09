import { useEffect, useState } from "react";
import Products from "../DATA.json"
import Menu from "../menu.json"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Welcome(props) {
    const [data, setData] = useState(props.Products);
    const [plist, setPList] = useState(data)
    const [name, setName] = useState("")
    const [fTitle, setFTitle] = useState([])
    const [listPCart, setListPCart] = useState([])

    const filter = (name) => {
        let fData = data.filter(p => p.name.indexOf(name) >= 0);
        setPList(fData);
    }


    useEffect(() => {
        let uPList = plist.map(item => {
            let newItem = {
                ...item,
                count: 0
            }
            return newItem
        })
        setPList(uPList)
    }, [])

    const menuHandler = (title) => {
        let fData = data.filter(p => p.name.indexOf(title) >= 0); // Tim kiem phan tu
        setPList(fData);
    }

    const cbMenuHandler = (e) => {
        let Checked = e.target.checked;
        let defaultValue = e.target.defaultValue
        console.log(defaultValue, Checked);
        let newFTitle = fTitle;

        if (Checked) {
            // filter(defaultValue)
            newFTitle.push(defaultValue)
            setFTitle(newFTitle)

        } else {
            newFTitle.splice(fTitle.indexOf(defaultValue), 1);
            setFTitle(newFTitle)
        }

        console.log("Danh muc can tim kiem:", fTitle);


        if (fTitle.length === 0) {
            setPList(data);
        } else {

            let fData = data.filter((p, idx) => {
                let nameSplt = p.name.split("|");

                console.log("Danh muc cua ten film ", idx, nameSplt)

                let rs = false;
                nameSplt.forEach(title => {
                    if (fTitle.indexOf(title) >= 0) {
                        rs = true;
                    }
                })

                return rs;

            });
            setPList(fData);
        }


    }

    return (
        <>

            <div className="welcome" style={{ display: "flex", justifyContent: "space-between", flexDirection: "row" }}>
                <div style={{ width: "30%", backgroundColor: "Highlight", display: "flex", flexDirection: "column" }}>
                    {Menu.map(m => (
                        <div>
                            <input type="checkbox" onChange={cbMenuHandler} value={m.title} />
                            <button className="button1" onClick={() => { menuHandler(m.title) }}>{m.title}</button>
                        </div>
                    ))}
                </div>
                <div style={{ width: "70%" }}>
                    <span>Tim kiem: </span>
                    <input type="text" value={name} onChange={
                        e => {
                            let v = e.target.value;
                            setName(v);
                            filter(v);
                        }
                    } />
                    <span>Tong so film: {plist.length}</span>
                    <div className="plist" style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
                        {plist && plist.map((p, idx) => {

                            return (
                                <div className="product" style={{ backgroundColor: "Highlight", }}>
                                    <span>name: {p.name}</span>
                                    <img src={p.url} width={200} height={150} />
                                    <span>price: {p.price} $</span>
                                    <div style={{ display: "flex", gap: "10px" }}>
                                        <button
                                            onClick={() => {
                                                let updateLst = plist.map((p, t) => {
                                                    if (t == idx) {
                                                        p.count--
                                                    }
                                                    return p
                                                })
                                                setPList(updateLst)
                                            }}
                                        >-</button>
                                        {p.count}
                                        <button onClick={() => {
                                            let updateLst = plist.map((p, t) => {
                                                if (t == idx) {
                                                    p.count++
                                                }
                                                return p

                                            })
                                            setPList(updateLst)
                                        }}>
                                            +
                                        </button>
                                        <button onClick={()=>{
                                            props.setCarts(p)
                                        }} >Buy</button>
                                    </div>

                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}
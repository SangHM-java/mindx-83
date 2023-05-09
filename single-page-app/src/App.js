import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/layout/Header';
import { useEffect, useState } from 'react';
import Welcome from './components/Welcome';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Dashboard from './components/Dashboard';
import Products from "./DATA.json"

function App() {

  const [user, setUser] = useState(null)
  const [userBtn, setUserBtn] = useState(<button>Login</button>)
  const [listPCart1, setListPCart1] = useState([])

  let localUser = localStorage.getItem("user");


  useEffect(()=>{
    console.log("Danh sach mua hang thay doi");
  },[listPCart1])

  const loginSuccess = (user) => {
    setUser(user);
  }
  const setCart= (p) => {
    setListPCart1([
      ...listPCart1,
      p
    ])
  }
  return (
    <div>
      <Popup trigger={<button style={{ position: "fixed", bottom: 10, right: 10 }}> Message</button>} position="left up">
        <div>Popup content here !!
          <input type="text" />
        </div>
      </Popup>
      <div className="App">

        {
          user == null && localUser == null ? <Login loginSuccess={loginSuccess} /> : <>{<Header user={user ? user: localUser} listPCart={listPCart1} />}
            <Welcome Products={Products}  setCarts={setCart} />

          </>
        }

      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Header from './components/layout/Header';
import { useState } from 'react';
import Welcome from './components/Welcome';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

function App() {

  const [user, setUser] = useState(null)
  const [userBtn, setUserBtn] = useState(<button>Login</button>)

  let localUser = localStorage.getItem("user");


  const loginSuccess = (user) => {
    setUser(user);
  }
  return (
    <div>
       <Popup  trigger={<button style={{position: "fixed", bottom: 30, right: 10}}> Message</button>} position="left up">
                <div>Popup content here !!
                  <input type="text" />
                </div>
            </Popup>
      <div className="App">
      
      {
        user == null && localUser == null ? <Login loginSuccess={loginSuccess} /> : <><Header user={user} /><Welcome /></>
      }
      
    </div>
    </div>
  );
}

export default App;

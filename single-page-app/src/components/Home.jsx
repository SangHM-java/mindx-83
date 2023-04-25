// import logo from './logo.svg';
// import './App.css';
// import Login from './components/Login';
// import Header from './components/layout/Header';
// import { useState } from 'react';
// import Welcome from './components/Welcome';

// function Home() {

//   const [user, setUser] = useState(null)
//   const [userBtn,setUserBtn] = useState(<button>Login</button>)

//   const checkUserLogin = () => {
//       let user = localStorage.getItem("user")
//       if(user) {
//           setUserBtn(<button>Logout</button>)
//       }
//       console.log(user);
//   }

//   //checkUserLogin()
//   const loginSuccess = (user) => {
//     setUser(user);
//   }
//   return (
//     <div className="App">

//       {
//         user == null ? <Login loginSuccess={loginSuccess} /> :
//           <>
//             <Header user={user}/>
//             <Welcome /></>
//       }
//     </div>
//   );
// }

// export default App;

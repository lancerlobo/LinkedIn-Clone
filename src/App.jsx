import React, { useEffect } from "react";
import "./assets/App.css";
import Header from "../components/Header.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Feed from "../components/Feed.jsx";
import Login from "../components/Login.jsx";
import Widgets from "../components/Widgets.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import { auth } from "../components/Firebase";


function App() {

  // useSelector comes with Redux to select the selector, same as useDispatch
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  // when the App component loads we fire up a piece of code
  useEffect(() => {
    // listener to check any authentication changes, userAuth comes as callback
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="App">
      <Header />

      {!user ? <Login /> : (
        <div className="app-body">
        <Sidebar />
        <Feed />
        <Widgets />
        </div>
      )};
      
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import ChannelBar from './ChannelBar';
import Chat from './Chat';
import { selectUser } from './features/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect( () => {
    auth.onAuthStateChanged( (authUser) => {
      console.log("user is", authUser);
      if (authUser) {
        // user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // user is logged out 
        dispatch(logout())
      }
    } );
  }, [dispatch])

  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <>
          {/* server bar */}
          <ChannelBar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;

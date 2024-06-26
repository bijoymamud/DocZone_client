import axios from "axios";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null)


const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, passeword) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passeword)
  }

  const signIn = (email, passeword) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passeword)
  }

  const GoogleSignIn = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider)
  }

  const logOut = () => {
    setLoading(false);
    return signOut(auth)

  }

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, photoURL: photo
    })
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current User', currentUser);

      //get and set token
      if (currentUser) {
        axios.post(' http://localhost:5000/jwt', { email: currentUser.email })
          .then(data => {
            console.log(data.data.token);
            localStorage.setItem('access-token', data.data.token)
            setLoading(false)
          })
      }

      else {
        localStorage.removeItem('access-token')
      }


    });
    return () => {
      return unSubscribe();
    }
  }, [])

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, loggedUser => {
      console.log('logged in user inside', loggedUser);
      setUser(loggedUser);
    })
    return () => {
      return unsubscribe();
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUserProfile,
    GoogleSignIn,
    setUser,

  }


  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
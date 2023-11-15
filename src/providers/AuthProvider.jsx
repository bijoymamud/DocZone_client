import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from '../firebase/firebase.config';


export const AuthContext = createContext(null)


const auth = getAuth(app);


const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, passeword) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, passeword)
  }

  const signIn = (email, passeword) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth,email, passeword)
  }

  const logOut = () => {
    setLoading(true);
    return signOut(auth)

  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('current User', currentUser);
      setLoading(false)
    });
    return () => {
      return unSubscribe();
    }
  }, [])



  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut
  }


  return (
    <AuthContext.Provider value={authInfo} >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
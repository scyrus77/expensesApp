import { firebase, googleAuthProvider } from '../firebase/firebase';

export const login = (uid) => ({
  type: 'LOGIN',
  uid
});

export const startLogin = () => {
  return () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = (uid) => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    //console.log('startLogout');
    return firebase.auth().signOut();
  };
};

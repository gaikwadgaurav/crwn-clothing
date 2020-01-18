import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyClGCz6wlrMMLJmVzoaHv4jyYDLy4Zt0es",
    authDomain: "crwn-clothing-db-f2b55.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-f2b55.firebaseio.com",
    projectId: "crwn-clothing-db-f2b55",
    storageBucket: "crwn-clothing-db-f2b55.appspot.com",
    messagingSenderId: "81969688290",
    appId: "1:81969688290:web:2d16b8931fd1f2cdd7b8bb",
    measurementId: "G-4DBJYHWDFL"
};
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid }`);

    //getting snapshot
    const snapShot = await userRef.get();

   if(!snapShot.exists){
       const { displayName, email } = userAuth;
       const createdAt = new Date();
       
       try{
           await userRef.set({
               displayName,
               email,
               createdAt,
               ...additionalData
           })
       }catch (error) {
           console.log('error creating user',error.message);
       }
   }
   return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

//Google Authentication
const provider = new firebase.auth.GoogleAuthProvider();

//for Google Pop up whenever we use auth provider
provider.setCustomParameters( {prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

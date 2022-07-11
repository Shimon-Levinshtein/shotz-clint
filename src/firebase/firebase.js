import firebase from 'firebase/app';
import 'firebase/storage';
// import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY ,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID ,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDBER_ID ,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};
// const firebaseConfig = {
//     apiKey: "AIzaSyCgSP2NXilP3q5kAoNngKP0WeM7XarQmvw",
//     authDomain: "shatz-821d9.firebaseapp.com",
//     projectId: "shatz-821d9",
//     storageBucket: "shatz-821d9.appspot.com",
//     messagingSenderId: "257455085855",
//     appId: "1:257455085855:web:f4de55fbd0e6ce7bed782a",
//     measurementId: "G-SLN5F3EW63"
// };



// firebase.initializeApp(firebaseConfig);
// // firebase.analytics();

// const storage = firebase.storage();
// // const auth = firebase.auth();

// export {
//     storage,
//     // auth,
//     firebase as default
// }

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
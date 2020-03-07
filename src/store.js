import firebase from "firebase";
import "firebase/firestore";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyCANCEG3EzPA-dTx3hbGNn9KZ2D-6QM9bI",
  authDomain: "kill-your-boredom.firebaseapp.com",
  databaseURL: "https://kill-your-boredom.firebaseio.com",
  projectId: "kill-your-boredom",
  storageBucket: "kill-your-boredom.appspot.com",
  messagingSenderId: "760856205175",
  appId: "1:760856205175:web:7fa3ec5b80072bb22f3372",
  measurementId: "G-VGV2LDKJ2R"
});

const db = fire.firestore();
const activities = db.collection("activities");


// firebase
//   .firestore()
//   .settings({ cacheSizeBytes: 3145728, experimentalForceLongPolling: true }); // 3MB

// fire
//   .firestore()
//   .enablePersistence()
//   .then(() => console.log("Offline persistence started"))
//   .catch(error => {
//     if (window.crashlytics)
//       window.crashlytics.logPriority(
//         FirebaseCrashlytics.LOG.ERROR,
//         "store-enablePersistence",
//         error
//       );
//   });

// const images = firebase
//   .storage()
//   .ref()
//   .child("images");
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();
// const publishedPosts = db.collection("publishedPosts");
// const greetings = db.collection("greetings");
// const miscClientConfig = db.collection("miscClientConfig");
// const liveNews = db.collection("liveNews");

// const googleSignIn = () => {
//   if (window.crashlytics)
//     window.crashlytics.logPriority(
//       FirebaseCrashlytics.LOG.DEBUG,
//       "store-googleSignIn",
//       "Execution starting."
//     );
//   if (window.cordova) {
//     window.FirebasePerformance.startTrace("googleSignIn");
//   }
//   if (window.FirebasePlugin && window.FirebasePlugin.logEvent) {
//     window.FirebasePlugin.logEvent("login", { sign_up_method: "Google" });
//   }

//   firebase
//     .auth()
//     .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
//     .then(() =>
//       firebase
//         .auth()
//         .signInWithRedirect(provider)
//         .then(() => firebase.auth().getRedirectResult())
//         .then(result => {
//           // const token = result.credential.accessToken;
//           // const user = result.user;
//           if (window.cordova) {
//             window.FirebasePerformance.incrementMetric("googleSignIn", "hit");
//             window.FirebasePerformance.stopTrace("googleSignIn");
//           }
//         })
//         .catch(error => {
//           console.error(error);
//           if (window.crashlytics)
//             window.crashlytics.logPriority(
//               FirebaseCrashlytics.LOG.ERROR,
//               "store-googleSignIn-signInWithRedirect",
//               error
//             );
//           // const errorCode = error.code;
//           // const errorMessage = error.message;
//           if (window.cordova) {
//             window.FirebasePerformance.incrementMetric("googleSignIn", "miss");
//             window.FirebasePerformance.stopTrace("googleSignIn");
//           }
//         })
//     )
//     .catch(error => {
//       // const errorCode = error.code;
//       // const errorMessage = error.message;
//       console.error(error);
//       if (window.crashlytics)
//         window.crashlytics.logPriority(
//           FirebaseCrashlytics.LOG.ERROR,
//           "store-googleSignIn-setPersistence",
//           error
//         );
//     });
// };

// const logOut = () => {
//   if (window.crashlytics)
//     window.crashlytics.logPriority(
//       FirebaseCrashlytics.LOG.DEBUG,
//       "store-logOut",
//       "Execution starting."
//     );
//   auth.signOut().then(
//     function() {
//       //  eslint-disable-line
//       console.log("Signed Out");
//       localStorage.removeItem("userConfig");
//     },
//     function(error) {
//       //  eslint-disable-line
//       if (window.crashlytics)
//         window.crashlytics.logPriority(
//           FirebaseCrashlytics.LOG.ERROR,
//           "store-logOut",
//           error
//         );
//     }
//   );
// };

// const signInAnonymously = () => {
//   console.log("signing in anonymously");
//   if (window.crashlytics)
//     window.crashlytics.logPriority(
//       FirebaseCrashlytics.LOG.DEBUG,
//       "store-signInAnonymously",
//       "Execution starting."
//     );
//   firebase.auth().signInAnonymously();
// };

export { activities };

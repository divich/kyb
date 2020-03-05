var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kill-your-boredom.firebaseio.com"
});

var db = admin.firestore();

db.collection("activities")
  .get()
  .then(snapshot => {
    console.log(snapshot.size);
  });
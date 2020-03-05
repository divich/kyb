var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

const axios = require("axios");
var http = require("http");
var https = require("https");

const raw = "http://www.boredapi.com/api/activity";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://kill-your-boredom.firebaseio.com"
});

var db = admin.firestore();
var batch = db.batch();
// let count = 0;
// let pushed = 0;
// let totalLength = 9999999 - 1000000;
// let dbRef = db.collection("activities");

// let number = 2237760;
let number = 8634053;

let start = null;
function foo() {
  // for(j=1; j<2001; j++) {
  //   // let start = "" + 100 + i;
  //   if ((5000 * j).toString().length == 5) {
  //   start = "100".concat((5000 * j).toString());
  //   // console.log(start);
  //   } else if ((5000 * j).toString().length == 6) {
  //     start = "10".concat((5000 * j).toString());
  //   } else {
  //     start = (5000 * j).toString();
  //   }
  //   console.log(start);
  console.log(number);
  Promise.all(
    [...Array(1)].map((e, i) =>
      // axios({
      //   method: "get",
      //   url: `http://www.boredapi.com/api/activity?key=${1005000 + i}}`,
      //   httpAgent: new http.Agent({ keepAlive: true }),
      //   httpsAgent: new https.Agent({ keepAlive: true })
      // })
         axios.get(`http://www.boredapi.com/api/activity?key=${number + i}`)
        .then(response => {
          if (response.data.hasOwnProperty("key")) {
            let dbRef = db.collection("activities");
            dbRef
              .add(response.data)
              .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                // count = count + 1;
              })
              .catch(function(error) {
                console.error("Error adding document: ", error);
              });
            console.log(response.data);
          }
          number = number + 1;
          return response.data;
        })
    )
  )
   .then(console.log(number))
   .catch(console.log);
}
// }
// foo();
setInterval(function() {
  foo();
}, 10);

// function app() {
//     console.log(1);
// for (i = 1000000; i <= 9999999; i++) {
//     console.log(i);
//   if (count === 0) {
//     batch = db.batch();
//   }
//   if (batch != null) {
//     let dbRef = db.collection("activities");
//     axios
//       .get(`http://www.boredapi.com/api/activity?key=${i}`)
//       .then(response => {
//         console.log(response.data);
//         dbRef
//           .add(response.data)
//           .then(function(docRef) {
//             console.log("Document written with ID: ", docRef.id);
//             count = count + 1;
//           })
//           .catch(function(error) {
//             console.error("Error adding document: ", error);
//           });
//         batch.commit();
//       });
//     if (count > 50 || totalLength - pushed <= 50) {
//       count = 0;
//       pushed = pushed + 50;
//       console.log("done" + pushed);
//     }
//   }
// }
// }

// app();

// let dbRef = db.collection("activities");
// axios.get(`http://www.boredapi.com/api/activity?key=1000000`).then(response => {
//   console.log(response.data);
//   dbRef
//     .add(response.data)
//     .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//       console.error("Error adding document: ", error);
//     });
//   //   batch.set(dbRef, response.data);
//   count = count + 1;
// });

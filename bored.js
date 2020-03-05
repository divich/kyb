const axios = require('axios');
var fs = require("fs");


const withType = "http://www.boredapi.com/api/activity?type=recreational&participants=1";
const withKey = "http://www.boredapi.com/api/activity?key=5881029";
const raw = "http://www.boredapi.com/api/activity";

// axios
//   .get(raw)
//   .then(response => {
//     console.log(response.data);
//   });


axios
  .get(raw)
  .then(response => {
   fs.writeFile("activities.json", JSON.stringify(response.data), function(error) {
     if (error) {
       console.log(" error " + err);
    //    if (fail) fail(error);
     } else {
       console.log("success");
    //    if (success) success();
     }
   });
  })
  .catch(function(error) {
    console.log(error);
  });

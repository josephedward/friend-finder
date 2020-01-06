var express = require('express');
var path=require("path");
// var cors = require('cors');
var app = express();
var PORT = process.env.PORT; 
// || 3000;

//  middleware
app.use(express.static(path.join(__dirname, "./app/public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cors());


require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

// Start the server on the port
app.listen(PORT, function() {
  console.log('Listening on PORT: ' + PORT);
});















//************************************************************************* */


// function createFriend(){

//     var friend={
//       name: $("#nameInput").val(),
//       photo: $("#photoInput").val(),
//       scoreArr:$(".scoreInput").each(function(){ 
//         var tempScore=$(this).val();
//         scoreArr.push(tempScore);
//       })

//     }

// }

// put the HTML file containing your form in a directory named "public" (relative to where this script is located)
// app.post("/survey", express.static(path.join(__dirname, "./public/images")));




// app.use(express.static('./public'));
// app.use(express.static('images'));

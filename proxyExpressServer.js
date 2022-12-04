const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


// var cors = require('cors');

// // If you want to restrict AJAX access to a single origin, you can use the origin option:
// // app.use(cors({
// //     origin: 'http://yourapp.com'
// // }));
// // If you would rather have a list of allowed origins, you can use a function instead of a string as the origin value:
// var allowedOrigins = ['http://127.0.0.1:5500','http://127.0.0.1:3000',
//     'http://localhost:3000','http://yourapp.com'];
    
// app.use(cors({
//     origin: function (origin, callback) {
        
//         // allow requests with no origin 
//         // (like mobile apps or curl requests)
//         if (!origin) return callback(null, true);
//         console.log(origin)
//         if (allowedOrigins.indexOf(origin) === -1) {
//             var msg = 'The CORS policy for this site does not ' +
//                 'allow access from the specified Origin.';
//             return callback(new Error(msg), false);
//         }
//         return callback(null, true);
//     }
// }));


app.use(express.static(path.join(__dirname, 'build')));

app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080);
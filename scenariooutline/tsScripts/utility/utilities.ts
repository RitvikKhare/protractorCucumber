var fs = require('fs');
var myObj;


// Handle the data 
let handleJSONFile = function (err, data) {
    if (err) {
        throw err;
    }
    myObj = JSON.parse(data);
}


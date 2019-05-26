const https = require('https');
const fs = require('fs');

var img
module.exports.Req_Mars = function  (){

const numbe = Math.floor(Math.random() * 2394); 
    https.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol='+numbe+'&api_key=59XdrbkSx7x5CVdkt6rHLLQcfJ9UEBmref9avhMu', (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  resp.on('end', () => {
   
    json = JSON.parse(data);

    img = json.photos[0].img_src
    sol = json.photos[0].sol
    date = json.photos[0].earth_date
    rover = json.photos[0].rover.name
    rover_status = json.photos[0].rover.status

    var jsonFile = { 
            "img" : img, 
            "sol" : sol, 
            "rover" : rover ,
            "date" : date
      }
var jsfil2 ={ "img" : img, "sol" : sol, "rover" : rover ,"date" : date}
     return fs.writeFile('requested_data.json', JSON.stringify(jsonFile), function(err) {if(err) {return console.log(err);};return img;}); 
     
        
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

}
 //function Generate_Dat(){
      
    //return req()
      
//}
module.exports.log = function (msg) { 
    console.log(msg);
};

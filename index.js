const https = require('https');
const fs = require('fs');
//  ██████╗2██╗22██╗███╗222██╗2█████╗2███████╗2█████╗22222222█████╗2██████╗2██╗
//  ██╔══██╗██║22██║████╗22██║██╔══██╗██╔════╝██╔══██╗222222██╔══██╗██╔══██╗██║
//  ██████╔╝███████║██╔██╗2██║███████║███████╗███████║█████╗███████║██████╔╝██║
//  ██╔══██╗╚════██║██║╚██╗██║██╔══██║╚════██║██╔══██║╚════╝██╔══██║██╔═══╝2██║
//  ██║22██║22222██║██║2╚████║██║22██║███████║██║22██║222222██║22██║██║22222██║
//  ╚═╝22╚═╝22222╚═╝╚═╝22╚═══╝╚═╝22╚═╝╚══════╝╚═╝22╚═╝222222╚═╝22╚═╝╚═╝22222╚═╝

var token2;

RequestMars_sol = function (rover,sol){

  //rover = Rover; 
  if(typeof rover == "undefined")
  {
    rover = 'Curiosity'  
  }
  if (fs.existsSync('requested_data.json'))
  {
    fs.unlink('requested_data.json', function (err) {
      if (err) throw err; 
    });
  }
  else{
    fs.writeFileSync('requested_data.json', function (err) {
      if (err) throw err; 
    });
  }
  if(!rover == typeof('string')){
    return rover = 'Curiosity'
  }
  if(!sol == typeof('number')){
    return sol = '1';
  }
 var inumb = 0;
    
    //console.log(inumb);
const numbe = Math.floor(Math.random() * 2394);

var dataToken = JSON.stringify(token2)
var gg = JSON.parse(dataToken)
const url =  'https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol='+sol+'&api_key='+gg.token;                
 //console.log(url)     
    https.get(url, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  return resp.on('end', () => {
    json = JSON.parse(data);
    if(data == '{"photos":[]}'){
      console.log('sol :',sol+' has no data for',rover,'rover')
      sol++;
      RequestMars_sol(rover,sol)
    }
    else
    {
                
    var lenght = json.photos.lenght
    const numbe = Math.floor(Math.random() * lenght);

    img = json.photos[0].img_src
    //console.log(img)
    sol = json.photos[0].sol
    date = json.photos[0].earth_date
    rover_N = json.photos[0].rover.name
    rover_status = json.photos[0].rover.status
    var a = inumb
    var jsonFile = 
       
            { 
            "img" : img, 
            "sol" : sol, 
            "rover" : rover_N ,
            "date" : date
            }
          
      
      var open = '{';
      var close = '}';
      var str = JSON.stringify(jsonFile)
      
    if (fs.existsSync('requested_data.json'))
  {
      fs.writeFileSync("requested_data.json", str)
  }else{
    fs.writeFileSync('./requested_data.json', function (err) {
      if (err) throw err; 
    });
    fs.writeFileSync("requested_data.json", str)
  }

    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
abc = function()
{
  console.log('abc')
}
//sol++;

}
RequestMars_date = function (rover,date){

  if (fs.existsSync('requested_data.json'))
  {
    fs.unlink('requested_data.json', function (err) {
      if (err) throw err; 
    });
  }
  else{
    fs.writeFileSync('requested_data.json', function (err) {
      if (err) throw err; 
    });
  }
  if(!rover == typeof('string')){
    return rover = 'Curiosity'
  }
  if(!date == typeof('number')){
    return date = '2015-6-3';
  }
  if(date == "undefined")
  {
    return date = '2015-6-3'
  }
  if(rover == "undefinded"){
    return rover = 'Curiosity'
  }
 var inumb = 0;
    
    //console.log(inumb);
const numbe = Math.floor(Math.random() * 2394);

var dataToken = JSON.stringify(token2)
var gg = JSON.parse(dataToken)
const url =  'https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?earth_date='+date+'&api_key='+gg.token;                
 //console.log(url)     
    https.get(url, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  return resp.on('end', () => {
    json = JSON.parse(data);
    if(data == '{"photos":[]}'){
      console.log('date :',date+' has no data for',rover,'rover')
      RequestMars_date(rover,date)
    }
    else
    {
                
    var lenght = json.photos.lenght
    const numbe = Math.floor(Math.random() * lenght);

    img = json.photos[0].img_src
    //console.log(img)
    sol = json.photos[0].sol
    date = json.photos[0].earth_date
    rover_N = json.photos[0].rover.name
    rover_status = json.photos[0].rover.status
    var a = inumb
    var jsonFile = 
       
            { 
            "img" : img, 
            "sol" : sol, 
            "rover" : rover_N ,
            "date" : date
            }
          
      
      var open = '{';
      var close = '}';
      var str = JSON.stringify(jsonFile)
      
    if (fs.existsSync('requested_data.json'))
  {
      fs.writeFileSync("requested_data.json", str)
  }else{
    fs.writeFileSync('./requested_data.json', function (err) {
      if (err) throw err; 
    });
    fs.writeFileSync("requested_data.json", str)
  }

    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
abc = function()
{
  console.log('abc')
}


}
RequestMars = function (rover){

  if (fs.existsSync('requested_data.json'))
  {
    fs.unlink('requested_data.json', function (err) {
      if (err) throw err; 
    });
  }
  else{
    fs.writeFileSync('requested_data.json', function (err) {
      if (err) throw err; 
    });
  }
  if(!rover == typeof('string')){
    return rover = 'Curiosity'
  }
 
    
    
const numbe = Math.floor(Math.random() * 2394);

var dataToken = JSON.stringify(token2)
var gg = JSON.parse(dataToken)
const url =  'https://api.nasa.gov/mars-photos/api/v1/rovers/'+rover+'/photos?sol='+numbe+'&api_key='+gg.token;                
 //console.log(url)     
    https.get(url, (resp) => {
  let data = '';

  resp.on('data', (chunk) => {
    data += chunk;
  });

  return resp.on('end', () => {
    json = JSON.parse(data);
    if(data == '{"photos":[]}'){
      console.log('sol :',sol+' has no data for',rover,'rover')
      RequestMars(rover)
    }
    else
    {
                
    var lenght = json.photos.lenght
    const numbe = Math.floor(Math.random() * lenght);

    img = json.photos[0].img_src
    //console.log(img)
    sol = json.photos[0].sol
    date = json.photos[0].earth_date
    rover_N = json.photos[0].rover.name
    rover_status = json.photos[0].rover.status
    //var a = inumb
    var jsonFile = 
       
            { 
            "img" : img, 
            "sol" : sol, 
            "rover" : rover_N ,
            "date" : date
            }
          
      
      var open = '{';
      var close = '}';
      var str = JSON.stringify(jsonFile)
      
    if (fs.existsSync('requested_data.json'))
  {
      fs.writeFileSync("requested_data.json", str)
  }else{
    fs.writeFileSync('./requested_data.json', function (err) {
      if (err) throw err; 
    });
    fs.writeFileSync("requested_data.json", str)
  }

    }
  });
}).on("error", (err) => {
  console.log("Error: " + err.message);
});
abc = function()
{
  console.log('abc')
}

}
module.exports = class R4nasa {
  constructor(token) {
    this.token = token;
   
    token2 = token
}

RequestMars_sol(rover,sol) {
    
    return RequestMars_sol(rover,sol)    
}
RequestMars_date(rover, date){
  return RequestMars_date(rover, date)
}
RequestMars(rover){
  return RequestMars(rover)
}


}
module.exports.log = function (msg) { 
    console.log(msg);
};

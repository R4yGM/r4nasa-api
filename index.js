const https = require('https');
const fs = require('fs');
//  ██████╗2██╗22██╗███╗222██╗2█████╗2███████╗2█████╗22222222█████╗2██████╗2██╗
//  ██╔══██╗██║22██║████╗22██║██╔══██╗██╔════╝██╔══██╗222222██╔══██╗██╔══██╗██║
//  ██████╔╝███████║██╔██╗2██║███████║███████╗███████║█████╗███████║██████╔╝██║
//  ██╔══██╗╚════██║██║╚██╗██║██╔══██║╚════██║██╔══██║╚════╝██╔══██║██╔═══╝2██║
//  ██║22██║22222██║██║2╚████║██║22██║███████║██║22██║222222██║22██║██║22222██║
//  ╚═╝22╚═╝22222╚═╝╚═╝22╚═══╝╚═╝22╚═╝╚══════╝╚═╝22╚═╝222222╚═╝22╚═╝╚═╝22222╚═╝

var token2;

RequestMars_sol = function (rover = 'Curiosity', sol = 1) {
  const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + sol + '&api_key=' + token2.token;
  https.get(url, resp => {
    let data = '';
    resp.on('data', chunk => data += chunk);

    return resp.on('end', () => {
      const json = JSON.parse(data);
      if (data == '{"photos":[]}') {
        console.log('sol :', sol + ' has no data for', rover, 'rover')
        sol++;
        RequestMars_sol(rover, sol)
      } else {
        const img = json.photos[0].img_src
        sol = json.photos[0].sol
        const date = json.photos[0].earth_date
        const rover = json.photos[0].rover.name
        var jsonFile = {
          img,
          sol,
          rover,
          date
        }

        var str = JSON.stringify(jsonFile)
        fs.writeFileSync("requested_data.json", str)
      }
    });
  }).on("error", (err) => console.log("Error: " + err.message));
}
RequestMars_date = function (rover = 'Curiosity', date = '2015-6-3') {
  const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?earth_date=' + date + '&api_key=' + token2.token;
  https.get(url, (resp) => {
    let data = '';

    resp.on('data', chunk => data += chunk);

    return resp.on('end', () => {
      const json = JSON.parse(data);
      if (data == '{"photos":[]}') {
        console.log('date :', date + ' has no data for', rover, 'rover')
        RequestMars_date(rover, date)
      } else {
        const img = json.photos[0].img_src
        const sol = json.photos[0].sol
        date = json.photos[0].earth_date
        var jsonFile = {
          img,
          sol,
          rover,
          date
        }

        var str = JSON.stringify(jsonFile)
        fs.writeFileSync("requested_data.json", str)
      }
    });
  }).on("error", (err) => {
    console.log("Error: " + err.message);
  });
}
RequestMars = function (rover = 'Curiosity') {
  const numbe = Math.floor(Math.random() * 2394);
  const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/' + rover + '/photos?sol=' + numbe + '&api_key=' + token2.token;
  https.get(url, (resp) => {
    let data = '';

    resp.on('data', chunk => data += chunk);

    return resp.on('end', () => {
      const json = JSON.parse(data);
      console.log(json.photos.length);
      if (data == '{"photos":[]}') {
        console.log('sol :', numbe + ' has no data for', rover, 'rover')
        RequestMars(rover)
      } else {
        const img = json.photos[0].img_src
        const sol = json.photos[0].sol
        const date = json.photos[0].earth_date
        const rover = json.photos[0].rover.name
        var jsonFile = {
          img,
          sol,
          rover,
          date
        }

        var str = JSON.stringify(jsonFile)
        fs.writeFileSync("requested_data.json", str)
      }
    });
  }).on("error", err => console.log("Error: " + err.message));
}

module.exports = class R4nasa {
  constructor(token) {
    token2 = token
  }

  RequestMars_sol(rover, sol) {
    return RequestMars_sol(rover, sol)
  }
  RequestMars_date(rover, date) {
    return RequestMars_date(rover, date)
  }
  RequestMars(rover) {
    return RequestMars(rover)
  }
}
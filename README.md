

# r4nasa-api -Get space data easy
![alt text](http://r4yan.ga/r4nasa-api.png)

[![Github](https://img.shields.io/badge/GITHUB-link--Repository-blue.svg?logo=github&link=https://github.com/R4yGM/r4nasa-api&style=for-the-badge)
[![npm downloads](https://img.shields.io/npm/dt/r4nasa-api.svg?color=blue&logo=R4y&logoColor=blue&style=popout)
[![GitHub](https://img.shields.io/github/stars/R4yGM/r4nasa-api.svg?style=social)

[![npm package](https://nodei.co/npm/r4nasa-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/r4nasa-api/)


[![NPM Version](https://img.shields.io/npm/v/r4nasa-api.svg?style=flat-square)](https://www.npmjs.com/package/r4nasa-api)
[![node](https://img.shields.io/node/v/telegraf.svg?style=flat-square)](https://www.npmjs.com/package/r4nasa-api)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
[![version](https://img.shields.io/badge/r4nasa--api-v1.0.4-blue.svg)
[![use](https://img.shields.io/badge/dependencies-https-important.svg)


In development.

# Installation
just type this to install the module
```shell
$ npm install r4nasa-api
```
# Example
at top add the two constants for r4nasa and fs
```JavaScript
const r4nasa = require('r4nasa-api')
const fs = require('fs');
```
then add the line
```JavaScript
const R4nasa = new r4nasa({token:'YOUR_TOKEN'});
```
replace YOUR_TOKEN with your registration token where you can found it [Here](https://api.nasa.gov/index.html#apply-for-an-api-key)

## Random Mars images by sol
  to get thousands random Mars images by random rovers you have to request data with a function that returns 1 image and some data type
  ```JavaScript
R4nasa.RequestMars_sol(rover, sol)
```
in the two parameters you have to add the rover name(Curiosity is the rover with more data) and a random sol


this will create and write data in a json filed called requested_data.json
  ```Json
{
"img":"http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/01344/opgs/edr/fcam/FRB_516810721EDR_F0541238FHAZ00304M_.JPG",
"sol":1344,
"rover":"Curiosity",
"date":"2016-05-17"
}
```
and then in your script you have to parse the data with fs module that you have installed

  ```JavaScript
  //don't change requested_data.json path!
let rawdata = fs.readFileSync('./requested_data.json');  
var json = JSON.parse(rawdata)
//here are you going to get the img value in the json file 
console.log(json.img)
```
the final script will looks like
```JavaScript
const r4nasa = require('r4nasa-api')
const fs = require('fs');
const R4nasa = new r4nasa({token:'YOUR_TOKEN'});

//this is the parse function that will be parse the data in the json file
function parse()
{
let rawdata = fs.readFileSync('./requested_data.json');  
var json = JSON.parse(rawdata)
//here are you going to get the img value in the json file
console.log(json.img)
}

//this is a random number for a random sol
var randomSOL = Math.floor(Math.random() * 2394);

// writing and creating the file with data
R4nasa.RequestMars_sol("Curiosity", randomSOL)
// generating data requires time, and if the parse function is called before RequestMars_sol finish this will return an error 
setTimeout(parse, 3800);

```
the module is still in development so it doesn't have all the functions



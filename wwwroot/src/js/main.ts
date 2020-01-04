//main.js

// Test ability to load module with jquery objects:
var other = require('./other'); // CommonJS/RequireJS/node import
other();

//test ability to use fetch & promises in IE11:
var myfetchIds = require('./promise');
var url = "https://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/USA_Major_Cities/FeatureServer/0";
myfetchIds(url).then(function (ids: string[]) {
  console.log(ids.length);
  $("#fetchResult").text("Success. Got " + ids.length + " records");
})
  .catch(function (err: any) {
    $("#fetchResult").text("Error." + err);
  });

// Tree shaking test: 
// lets import one function from math only:
import { cube } from "./math"; // ES6 ES2015 import
console.log(cube(5));

//lets try to require an image so that it goes through the webpack pipeline:
//[tod] work in progress
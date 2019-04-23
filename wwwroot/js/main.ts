//main.js

// Test ability to load module with jquery objects:
var other = require('./other');
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
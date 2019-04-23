// Lets test that ECMA2015 (ES6) things like promises get converted to IE safe ES5
// we've added "whatwg-fetch" package as well as  "@babel/polyfill" & "@babel/preset-env"
function fetchIds(url: string) {
  return new Promise((resolve, reject) => {
    let queryUrl = "/query?f=json&where=1%3D1&returnIdsOnly=true";
    fetch(url + queryUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        resolve(data.objectIds)
      })
      .catch(function (err) {
        console.log(err);
        console.log("something went south");
        reject(err);
      })
  })
    .catch((err) => {
      console.log("An error occured in a weird spot?");
    });
}

module.exports = fetchIds;
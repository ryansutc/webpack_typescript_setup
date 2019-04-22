//other.js
function func() {
  console.log('loaded!');
  console.log(document.getElementById("yerName").innerText);
  var name = $("#yerName");
  name.text("America!");
  console.log(name.text());

}
module.exports = func;
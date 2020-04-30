function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}
function alert() {
  window.alert(5 + 6);
}
function repf() {
  var str = document.getElementById("replace").innerHTML;
  var txt = str.replace("Microsoft", "W3Schools");
  document.getElementById("replace").innerHTML = txt;
}
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present(x) {
    return x + ", I have a " + this.carname;
  }
}

mycar = new Car("Ford");
document.getElementById("demo").innerHTML = mycar.present("Hello");
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function submit() {
  document.getElementById("frm1").submit();
}
// var name = "codemzy";
// var url =
//   "http://anyorigin.com/go?url=" +
//   encodeURIComponent("https://www.codewars.com/users/") +
//   name +
//   "&callback=?";
// $.get(url, function (response) {
//   console.log(response);
// });
// var challenges = response.replace(/<thead>[\s|\S]*?<\/thead>/g).match(/<tr>/g)
//   .length;
// var points = response.match(
//   /<h1 class="flat-top text-primary">\[ ([\d]*?) \]<\/h1>/
// )[1];
// document.getElementById("scrap").innerHTML = points;

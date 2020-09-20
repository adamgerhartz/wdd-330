
const listLinks = [
  {
  	label: "Week1 notes",
  	url: "week1/index.html"
  }
];

var text = "";
var i;
 
text = "<ol>";

for (i = 0; i < listLinks.length; i++) {
  text += "<li>" + "<a href=" + listLinks[i].url + ">" + listLinks[i].label + "</li>";
}

text += "</ol>";

document.getElementById("id").innerHTML = text;


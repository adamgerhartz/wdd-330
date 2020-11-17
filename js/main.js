const listLinks = [
  {
  	label: "Week1 notes",
  	url: "week1/index.html"
  },
  {
  	label: "Week2 notes",
  	url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "week3/index.html"
  },
  {
    label: "Week4 notes",
    url: "week4/index.html"
  },
  {
    label: "Week5 notes",
    url: "week5/index.html"
  },
  {
    label: "Challenge One: Todo — Midterm",
    url: "week6/todo/todo.html"
  },
  {
    label: "Week7 notes",
    url: "week7/index.html"
  },
  {
    label: "Week8 notes",
    url: "week8/index.html"
  },
  {
  	label: "Week9 notes",
  	url: "week9/index.html"
  },
  {
  	label: "Week10 notes",
  	url: "week10/index.html"
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


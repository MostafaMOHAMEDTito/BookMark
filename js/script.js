var nameInput = document.getElementById("nameInput");
var urlInput = document.getElementById("urlInput");
var addButton = document.getElementById("addButton");
var tBody = document.getElementById("tBody");
var bookMarks = [];

if (localStorage.getItem("book") != null) {
  bookMarks = JSON.parse(localStorage.getItem("book"));
  displayBookMark();
}
function addMark() {
  var bookMark = {
    name: nameInput.value,
    url: urlInput.value,
  };
  bookMarks.push(bookMark);
  localStorage.setItem("book", JSON.stringify(bookMarks));
  displayBookMark();
}

function displayBookMark() {
  var marks = "";
  for (var i = 0; i < bookMarks.length; i++) {
    marks += `
    <tr>
    <td>${i}</td>
    <td>${bookMarks[i].name}</td>
    <td><a href="${bookMarks[i].url}"><button class=" btn btn-primary" type="button">➿Visit</button></a></td>
    <td><button onclick="deleteBooks(${i})" class="btn btn-danger" type="button">⛔Delete</button></td>
  </tr>
    `;
  }
  document.getElementById("tBody").innerHTML = marks;
}
function deleteBooks(index) {
  bookMarks.splice(index, 1);
  localStorage.setItem("book", JSON.stringify(bookMarks));
  displayBookMark();
}

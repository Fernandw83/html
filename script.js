var moveButton = document.querySelector("button:first-child");

var correctlyButton = document.querySelector("button:nth-child(2)");

moveButton.addEventListener("click", function () {
  var vertical = Math.floor(Math.random() * 400);
  var horizontal = Math.floor(Math.random() * 400);
  moveButton.style.position = "absolute";
  moveButton.style.left = vertical + "px";
  moveButton.style.top = horizontal + "px";
});

correctlyButton.addEventListener("click", function () {
  alert("Resposta correta! Vamos comer um Salpicão da discórdia");
});


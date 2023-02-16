const nameInput = document.getElementById("name");
nameInput.addEventListener("input", function() {
  console.log("Name changed to: " + nameInput.value);
});

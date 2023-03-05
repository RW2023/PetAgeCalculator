// Define variables  and functions I guess...?
// Function to calculate dog age 
function calculateDogAge() {
  let humanAge = document.getElementById("humanAge").value;
  let breed = document.getElementById("breed").value;
  let dogAge = null;

  if (breed === "small") {
    dogAge = humanAge * 5;
  } else if (breed === "medium") {
    dogAge = humanAge * 6;
  } else if (breed === "large") {
    dogAge = humanAge * 7;
  }

  document.querySelector(
    ".results"
  ).textContent = `Your ${breed} dog's age in dog years is: ${dogAge}`;
}

// function to toggle hidden div
function toggleHiddenDiv() {
  var div = document.querySelector(".hiddenDiv");
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
}
// trigger hidden div on button press. Since only one button so far this should work
resultsButton.addEventListener("click", function () {
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block";
  } else {
    hiddenDiv.style.display = "none";
  }
});

// Define variables
const resultsButton = document.getElementById("resultsButton");
const hiddenDiv = document.querySelector(".hiddenDiv");

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

// function to toggle hidden div and calculate dog age
function toggleHiddenDiv() {
  calculateDogAge();

  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block";
  } else {
    hiddenDiv.style.display = "none";
  }
}



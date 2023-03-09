const resultsDiv = document.querySelector(".results");
const hiddenDiv = document.querySelector(".hiddenDiv");
const dogAgeResults = document.querySelector(".dogAgeResults");
const catAgeResults = document.querySelector(".catAgeResults");
const smallDogDiv = document.querySelector(".hiddenDiv#smallDog");
const mediumDogDiv = document.querySelector(".hiddenDiv#mediumDog");
const largeDogDiv = document.querySelector(".hiddenDiv#largeDog");
// Get the button element
const dogButton = document.querySelector("#dogResultsButton");
const catButton = document.querySelector("#catResultsButton")




// Function to calculate dog age
function calculateDogAge() {
  let humanAge = document.getElementById("humanAge").value;
  let dogBreed = document.getElementById("dogBreed").value;
  let dogAge = ""; // Initialize dogAge to empty string

  if (dogBreed === "small") {
    dogAge = humanAge * 5;
    animateHiddenDiv(true, smallDogDiv); // Show the smallDogDiv element
  } else if (dogBreed === "medium") {
    dogAge = humanAge * 6;
    animateHiddenDiv(true, mediumDogDiv); // Show the mediumDogDiv element
  } else if (dogBreed === "large") {
    dogAge = humanAge * 7;
    animateHiddenDiv(true, largeDogDiv); // Show the largeDogDiv element
  }

  document.querySelector(
    ".results"
  ).textContent = `Your ${dogBreed} dog's age in dog years is: ${dogAge}`;
  
}

// Calculate cat age function
function calculateCatAge() {
  let catHumanAge = document.getElementById("catHumanAge").value;
  let catAge = "";

  if (catHumanAge === 1) {
    catAge = 15;
  } else if (catHumanAge === 2) {
    catAge = 24;
  } else {
    catAge = 24 + (catHumanAge - 2) * 4;
  }

  document.querySelector(
    ".results"
  ).textContent = `In cat years your cat is ${catAge} years old.`;
}

// Show the hiddenDiv element
dogButton.addEventListener("click", () => {
  // Toggle the "show" class on the hiddenDiv element
  hiddenDiv.classList.toggle("show");
});
// document.addEventListener("DOMContentLoaded", function () {
//   animateHiddenDiv(true, hiddenDiv); // Show the hiddenDiv element
// });

// function to animate the transition of the hidden div
function animateHiddenDiv(show, hiddenDiv) {
  let opacity = show ? 0 : 1;
  hiddenDiv.style.display = "block";
  let interval = setInterval(() => {
    opacity += show ? 0.1 : -0.1;
    hiddenDiv.style.opacity = opacity;
    if ((show && opacity >= 1) || (!show && opacity <= 0)) {
      clearInterval(interval);
      hiddenDiv.style.display = show ? "block" : "none";
    }
  }, 50);
}

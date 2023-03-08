const resultsDiv = document.querySelector(".results");
const hiddenDiv = document.querySelector(".hiddenDiv");

// Function to calculate dog age
function calculateDogAge() {
  let humanAge = document.getElementById("humanAge").value;
  let dogBreed = document.getElementById("dogBreed").value;
  let dogAge = null;

  if (dogBreed === "small") {
    dogAge = humanAge * 5;
  } else if (dogBreed === "medium") {
    dogAge = humanAge * 6;
  } else if (dogBreed === "large") {
    dogAge = humanAge * 7;
  }

  document.querySelector(
    ".results"
  ).textContent = `Your ${dogBreed} dog's age in dog years is: ${dogAge}`;
}

// Calculate cat age function
function calculateCatAge() {
  let catHumanAge = parseInt(document.getElementById("catHumanAge").value);
  let catAge = null;

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
document.addEventListener("DOMContentLoaded", function () {
  let hiddenDiv = document.getElementById("hiddenDiv");
  animateHiddenDiv(true, hiddenDiv); // Show the hiddenDiv element
});

// function to show hidden div on mouseenter
function showHiddenDiv() {
  calculateDogAge();
  calculateCatAge();
  animateHiddenDiv(true, hiddenDiv);
}



// function to hide hidden div on mouseleave
function hideHiddenDiv() {
  animateHiddenDiv(false, hiddenDiv);
}

// add event listeners to results div
resultsDiv.addEventListener("mouseenter", showHiddenDiv);
resultsDiv.addEventListener("click", hideHiddenDiv);



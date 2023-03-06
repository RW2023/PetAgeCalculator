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
  let humanAge = document.getElementById("humanAge").value;
  let catBreed = document.getElementById("dogBreed").value;
  let catAge = null;
  if (humanAge === 1) {
    catYears = 15;
  } else if (humanAge === 2) {
    catYears = 24;
  } else {
    catYears = 24 + (humanAge - 2) * 4;
  }

    document.querySelector(
    ".results"
  ).textContent = `Your ${dogBreed} cat's age in cat years is: ${dogAge}`;
}


// function to animate the transition of the hidden div
function animateHiddenDiv(show) {
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

// function to show hidden div on mouseenter
function showHiddenDiv() {
  calculateDogAge();
  animateHiddenDiv(true);
}

// function to hide hidden div on mouseleave
function hideHiddenDiv() {
  animateHiddenDiv(false);
}

// add event listeners to results div
resultsDiv.addEventListener("mouseenter", showHiddenDiv);
resultsDiv.addEventListener("click", hideHiddenDiv);

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
  let catHumanAge = document.getElementById("catHumanAge").value;
  let catYear = document.getElementById("catYear").value;
  let catAge = null;
  if (catHumanAge === 1) {
    catYear = 15;
  } else if (catHumanAge === 2) {
    catYear = 24;
  } else {
    catYear = 24 + (catHumanAge - 2) * 4;
  }

    document.querySelector(
    ".results"
  ).textContent = `Your cat's age in cat years is: ${catAge}`;
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

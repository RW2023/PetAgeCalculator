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

// function to toggle hidden div and calculate dog age
function toggleHiddenDiv() {
  calculateDogAge();
  let show = hiddenDiv.style.display === "none";
  animateHiddenDiv(show);
}

// add event listener to results button
resultsButton.addEventListener("click", toggleHiddenDiv);

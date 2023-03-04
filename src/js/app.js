// Define variables  and functions I guess...?
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



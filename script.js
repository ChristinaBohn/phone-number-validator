const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div")

const validateNumber = () => {
  if (!userInput.value) {
    return alert("Please provide a phone number");
  }

  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;

  if (regex.test(userInput.value)) {
    result.textContent = `Valid US number: ${userInput.value}`
  } else {
    result.textContent = `Invalid US number: ${userInput.value}`
  }
}

const clearForm = () => {
  userInput.value = "";
  result.textContent = "";
}

clearBtn.addEventListener("click", clearForm)
checkBtn.addEventListener("click", validateNumber)
// Get the elements from the popup.html file
const input = document.getElementById("input");
const output = document.getElementById("output");
const select = document.getElementById("select");
const form = document.getElementById("form");

// Handle form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();

  // Get the selected option and input text
  const selectedOption = select.options[select.selectedIndex].value;
  const text = input.value;

  // Perform the selected operation on the input text
  let result = "";
  switch (selectedOption) {
    case "uppercase":
      result = text.toUpperCase();
      break;
    case "lowercase":
      result = text.toLowerCase();
      break;
    case "reverse":
      result = text.split("").reverse().join("");
      break;
    case "count":
      result = `Character count: ${text.length}`;
      break;
    default:
      result = "Please select an option";
      break;
  }

  // Display the result in the output box
  output.value = result;
});

// Show the dropdown content when the extension icon is clicked
document.addEventListener("DOMContentLoaded", function () {
  select.click();
});

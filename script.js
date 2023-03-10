document.getElementById("submit").addEventListener("click", function() {
	var operation = document.getElementById("operation").value;
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");

    if (operation == "urlencode") {
        output.value = encodeURIComponent(input);
	} else if (operation == "uppercase") {
		output.value = input.toUpperCase();
	} else if (operation == "lowercase") {
		output.value = input.toLowerCase();
	} else if (operation == "reverse") {
		output.value = input.split("").reverse().join("");
	}
});

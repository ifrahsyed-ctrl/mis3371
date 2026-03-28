function reviewForm() {
  let output = "<h3>PLEASE REVIEW THIS INFORMATION</h3>";

  let inputs = document.querySelectorAll("input, textarea, select");

  inputs.forEach(input => {
    if (input.type !== "submit" && input.type !== "reset" && input.type !== "button") {
      if ((input.type === "radio" || input.type === "checkbox") && !input.checked) return;

      output += `<p><strong>${input.name || input.id}:</strong> ${input.value}</p>`;
    }
  });

  document.getElementById("reviewSection").innerHTML = output;
}

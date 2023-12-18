document.addEventListener("DOMContentLoaded", function () {
  const inputFields = document.querySelectorAll(".input-form .input-field");

  inputFields.forEach((input) => {
    input.addEventListener("focus", function () {
      // Hide icon when the input field is focused
      this.previousElementSibling.classList.add("hidden-icon");
    });

    input.addEventListener("input", function () {
      // Keep the icon hidden while the user is typing
      this.previousElementSibling.classList.add("hidden-icon");
    });

    input.addEventListener("blur", function () {
      // Reveal the icon only if the input field is empty
      if (this.value === "") {
        this.previousElementSibling.classList.remove("hidden-icon");
      }
    });
  });
});

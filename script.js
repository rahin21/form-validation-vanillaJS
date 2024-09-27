const nameInput = document.getElementById("name");
const nameError = document.getElementById("name-error");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email-error");
const passwordInput = document.getElementById("password");
const passwordError = document.getElementById("password-error");
const genderMale = document.getElementById("gender-male");
const genderFemale = document.getElementById("gender-female");
const gender3rd = document.getElementById("gender-3rd");
const genderError = document.getElementById("gender-error");
const toaster = document.getElementById("toaster");
const progress = document.getElementById("progress");

function showPassword() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}

function formValidation(event) {
  const gender = document.querySelector(
    'input[type="radio"][name="gender"]:checked'
  );
  event.preventDefault();
  const form = event.target;
  const emailValue = emailInput.value;
  const inputValue = nameInput.value;
  const passwordValue = passwordInput.value;

  // Regular expression for basic email validation & password validation
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/;

  // Reset the error message
  emailError.textContent = "";
  nameError.textContent = "";
  passwordError.textContent = "";
  genderError.textContent = "";

  // Validate name
  if (inputValue.length < 3) {
    nameError.textContent = "Name must be at least 3 letters.";
  }
  // Validate email format
  if (!emailPattern.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address.";
  }
  // Validate gender
  if (!genderMale.checked && !genderFemale.checked && !gender3rd.checked) {
    genderError.textContent = "At least 1 gender should be selected.";
  } 
  // Validate password format
  if (passwordInput.value.length < 8) {
    passwordError.textContent = "Password must be at least 8 letters.";
    return
  }
  if (!passwordPattern.test(passwordValue)) {
    passwordError.innerHTML =
      'Password must contain at least <br>1 lowercase letter(a-z),<br> 1 uppercase letter(A-Z), and <br>1 special character.(e.g. "@,-$%!...")';
      return
  }
  else {
    // Reset the progress bar's width
    console.log(`Name: ${nameInput.value}`);
    console.log(`Email: ${emailValue}`);
    console.log(`Password: ${passwordValue}`);
    console.log(`Gender: ${gender.value}`);
    form.reset();
    progress.style.width = "0";
    progress.style.animation = "none"; // Stop any ongoing animation
    // Trigger toaster to slide in
    toaster.style.transform = "translateX(0)";

    setTimeout(() => {
      progress.style.animation = "animate 2s linear forwards";
    }, 100);

    setTimeout(() => {
      toaster.style.transform = 'translateX(400px)'; // Hide toaster again after 3 seconds
    }, 3000);

  }
}

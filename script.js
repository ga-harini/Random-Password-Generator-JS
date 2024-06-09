const generateBtn = document.getElementById("generate-btn");
const passwordDisplay = document.getElementById("password-display");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  const passwordLength = 12;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordDisplay.textContent = password;
}


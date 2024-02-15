document.getElementById("generateBtn").addEventListener("click", function() {
    const length = prompt("Enter the desired length of the password (between 8 and 128 characters):");
    if (length === null) return; // If user cancels the prompt
    
    // Validate the input length
    if (isNaN(length) || length < 8 || length > 128) {
      alert("Please enter a valid password length between 8 and 128 characters.");
      return;
    }
    
    const includeUppercase = confirm("Do you want to include uppercase characters?");
    const includeLowercase = confirm("Do you want to include lowercase characters?");
    const includeNumbers = confirm("Do you want to include numbers?");
    const includeSpecialCharacters = confirm("Do you want to include special characters?");
    
    let charset = "";
    if (includeUppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeLowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) charset += "0123456789";
    if (includeSpecialCharacters) charset += "!@#$%^&*()-_+=[]{}|:;<>,.?/";
    
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    document.getElementById("passwordDisplay").value = password;
  });
  
  document.getElementById("copyBtn").addEventListener("click", function() {
    const passwordText = document.getElementById("passwordDisplay").value;
    if (passwordText.trim() !== "") {
      document.getElementById("passwordDisplay").select();
      document.execCommand("copy");
      alert("Password copied to clipboard!");
    } else {
      alert("Nothing to copy! Generate a password first.");
    }
  });
  
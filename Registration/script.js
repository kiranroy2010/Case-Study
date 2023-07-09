function generateRandomUserId() {
  var length = 5;
  var userId = '';

  for (var i = 0; i < length; i++) {
    var randomDigit = Math.floor(Math.random() * 10);
    userId += randomDigit;
  }

  return userId;
}
function validatePassword() {
  var passwordInput = document.getElementById("password");
  var password = passwordInput.value;

  var passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{5,}$/;
  if (!passwordPattern.test(password)) {
    alert("Password must contain at least 5 characters, including one uppercase letter, one lowercase letter, one special character, and one digit.");
    passwordInput.value = "";
    passwordInput.focus();
  }
}

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  var passwordToggle = document.getElementById("passwordToggle");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordToggle.innerHTML = '<i class="fa fa-eye-slash"></i>';
  } else {
    passwordInput.type = "password";
    passwordToggle.innerHTML = '<i class="fa fa-eye"></i>';
  }
}



function regUser() {
  var userId = generateRandomUserId();
  var customerName = document.getElementById("customerName").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var address = document.getElementById("address").value;
  var nomineeName = document.getElementById("nomineeName").value;
  var relationship = document.getElementById("relationship").value;
  var contactNumber = document.getElementById("contactNumber").value;


  // Store the selected data in local storage
  localStorage.setItem("userId", userId);
  localStorage.setItem("customerName", customerName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("address", address);
  localStorage.setItem("nomineeName", nomineeName);
  localStorage.setItem("relationship", relationship);
  localStorage.setItem("contactNumber", contactNumber);

  alert("Data uploaded successfully!");

  // Redirect to the result page
  window.open("ack.html");
  
  
}



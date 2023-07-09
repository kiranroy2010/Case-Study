function generateRandomUserId() {
  var length = 5;
  var userId = '';

  for (var i = 0; i < length; i++) {
    var randomDigit = Math.floor(Math.random() * 10);
    userId += randomDigit;
  }

  return userId;
}

window.addEventListener("DOMContentLoaded", function() {
  var userIdInput = document.getElementById("userId");
  userIdInput.value = localStorage.getItem("userId");
});


document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  // Check if the entered username and password match the authentication credentials
  if (username === "Kiranroy" && password === "Kiranroy") {
    // Authentication successful, redirect to the home page
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});



function displayPolicyDetails() {
  var policyTitle = document.getElementById("policyTitle").value;

  // You can customize the policy details based on the selected policy title
  var sumAssured, premiumAmount, policyTerm;

  if (policyTitle === "Policy1") {
    sumAssured = "100,000";
    premiumAmount = "500";
    policyTerm = "1 year";
  } else if (policyTitle === "Policy2") {
    sumAssured = "200,000";
    premiumAmount = "1000";
    policyTerm = "2 years";
  } else if (policyTitle === "Policy3") {
    sumAssured = "300,000";
    premiumAmount = "1500";
    policyTerm = "3 years";
  }

  document.getElementById("sumAssured").value = sumAssured;
  document.getElementById("premiumAmount").value = premiumAmount;
  document.getElementById("policyTerm").value = policyTerm;
}

function selectPolicy() {
  var userId = document.getElementById("userId").value;
  var policyType = document.getElementById("policyType").value;
  var policyTitle = document.getElementById("policyTitle").value;
  var sumAssured = document.getElementById("sumAssured").value;
  var premiumAmount = document.getElementById("premiumAmount").value;
  var policyTerm = document.getElementById("policyTerm").value;



  // Store the selected data in local storage
  localStorage.setItem("userId", userId);
  localStorage.setItem("policyType", policyType);
  localStorage.setItem("policyTitle", policyTitle);
  localStorage.setItem("sumAssured", sumAssured);
  localStorage.setItem("premiumAmount", premiumAmount);
  localStorage.setItem("policyTerm", policyTerm);




  var selectedResult = "User ID: " + userId + "<br>" +
                       "Policy Type: " + policyType + "<br>" +
                       "Policy Title: " + policyTitle + "<br>" +
                       "Sum Assured: " + sumAssured + "<br>" +
                       "Premium Amount: " + premiumAmount + "<br>" +
                       "Policy Term: " + policyTerm;
                       
  alert("Data uploaded successfully!");

  // Redirect to the result page
  window.open("result.html");
  document.getElementById("selectedResult").innerHTML = selectedResult;
  
}



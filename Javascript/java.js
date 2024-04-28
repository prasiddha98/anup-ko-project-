function validateForm() {
  //getting the inserted  value
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  
  //Checking condition to validate the form with suitable message
  if (username == "") {
    alert("Username must be filled out");
    return false;
  }
  
  if (email == "") {
    alert("Email must be filled out");
    return false;
  }
  if (phone == "") {
    alert("Phone number must be filled out");
    return false;
  }

  if (message == "") {
    alert("message must be filled out");
    return false;
  }
 
  alert("Thank You for your suggestion");
  return true;
}
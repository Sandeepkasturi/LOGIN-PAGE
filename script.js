function checkCredentials() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === "admin" && password === "codehere") {
    alert("Login successful!");
     window.location.href = "https://sandeephtmlcompiler.blogspot.com";
  } else {
    alert("Invalid credentials. Please try again.");
      window.location.href = "https://google.com/badpage";
 
 }
}

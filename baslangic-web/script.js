function sendMessage(){
  var email = document.getElementById("email").value;
  var name = document.getElementById("name").value;
  var message = document.getElementById("message").value;
  if(email === ""  || name === "" || message === ""){
    alert("Please fill all blanks")
  }else {
    document.getElementById("result").innerText = "Message sent."
  }
}
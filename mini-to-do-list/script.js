function addDuties(){
  var text = document.getElementById("duties").value;
  if (text === ""){
    alert("Please add duty")
  } else {
    var li = document.createElement("li");
    li.innerText = text;
    var list = document.getElementById("list");
    list.appendChild(li);
    document.getElementById("duties").value = "";
   
  }
}
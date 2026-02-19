function sendFeedback(){
    var username = document.getElementById("username").value;
    var r1 = document.getElementById("r1");
    var r2 = document.getElementById("r2");
    var agree = document.getElementById("agree");

    if (username === "" ){
        alert("Please write your username.");
    } else if(!(r1.checked || r2.checked)){
        alert("Please select at least one.");
    } else if (!agree.checked){
        alert("Please select agree box.");
    }
        else {
        document.getElementById("result").innerText = "Thanks for your feedback";
    }
}
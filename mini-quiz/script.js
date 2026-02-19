function checkAnswer(){
    var yes = document.getElementById("question1");
    var no = document.getElementById("question2");
    if(yes.checked){
        document.getElementById("result").innerText = "Correct";
    } else if (no.checked){
        document.getElementById("result").innerText = "Wrong";
    } else {
        alert("Please select an answer")
    }
}
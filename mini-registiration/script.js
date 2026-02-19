function register(){
    var email = document.getElementById("email").value ;
    var p1 = document.getElementById("p1");
    var p2 = document.getElementById("p2");
    var terms = document.getElementById("terms");

    if(email === ""){
        alert("Please enter your email.");
    }
    else if (!(p1.checked || p2.checked)){
        alert("Please select your plan.");
    } else if (!terms.checked){
        alert("Please agree.");
    } else {
        document.getElementById("result").innerText= "Registration Completed."
    }
}
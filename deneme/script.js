function sendMessage(){
    var username = document.getElementById("username").value ;
    var clas = document.getElementById("clas").value ;
    var message = document.getElementById("message").value ;

    if(username === ""|| clas ==="" || message ===""){
        alert("Lütfen tüm boşlukları doldurun.");
    } else {
        var result =document.getElementById("result").innerText="Formunuz başarıyla gönderildi."
    }

}
alert("yara")

function check(){
    var ac=document.getElementById("un").value;

    var pass=document.getElementById("psw").value
    if(ac==="blood" && pass==="donation")
    {
        alert("welcom...")
    }
 
    else
    {
        alert("incorrect Login info.")
    }
}

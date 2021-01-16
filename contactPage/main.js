

$('.cntnu-btn').click(function fadeAlert(){
    
 $('#welcome').slideUp(1000);
})

function showOrHideDiv() {
    var cnt = document.getElementById("Contact");
    if (cnt.style.display === "none") {
       cnt.style.display = "block";
    } else {
       cnt.style.display = "none";
       
    }
    alert("thank you for your time we will answer you as soon as possible")
 }
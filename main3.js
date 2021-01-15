// function myFunction() {
  // alert("This book is not found!");
// }

// $('#focus').click(function(){
// 	if(age<18){
// 		alert("invalid");
// }

$(document).ready(function(){
  $("form").submit(function(){
    alert("You can't donate");

  });
});


// $("#check").on('click',function(){
//     $("#card").show();
//     $("#list").hide();
//     $("#btn").hide();

  	 
//   });

$(".want").on('click',function(){
	$('.card').show();
    $('.pair').hide();
    $('#check').hide();
    $('#btn').hide();
    $('#list').hide();

})



alert(" Donate Blood, Save lives ")

function check(){
    var ac=document.getElementsByClassName("you").value;

    
    if(ac==="18" && pass==="25")
    {
        alert("welcome...")
    }
 
    else
    {
        alert("incorrect Login info.")
    }
}

//Appointment
function myFunction() {
  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x;
}


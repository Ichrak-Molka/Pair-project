

$(document).ready(function(){
$(".want").on('click',function(){
	$('.card').show();
    $('.pair').hide();
    $('#check').hide();
    $('#btn').hide();
    $('#list').hide();

})



//input age

function age(){
    
}
  $("#btn").on("click",function(a){
    a.preventDefault()
    var check1=$(".age2").val();
    console.log(check1)
    
    if(check1=="16" )
    {
        alert(" Sorry, you can't donate")
    }
 
    else
    {
        alert("You can donate")
    }
  });

//Appointment
function myFunction() {
  var x = document.getElementById("myDate").value;
  document.getElementById("demo").innerHTML = x;
}

});
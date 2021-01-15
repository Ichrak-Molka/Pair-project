

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

var center= [{
  Name:"Tunis"
  E-mail:"tunis@gmail.com"
  Adress:"Beb Sadoun"
  Phone Number:71758321
},

{
 Name:"Beja"
  E-mail:"beja@gmail.com",
  Adress:"beja center"
  Phone Number:74758321 
},
{
Name:"Sousse"
  E-mail:"sousse@gmail.com",
  Adress:"sahloule "
  Phone Number:73758321 
},
{
 Name:"Monastir"
  E-mail:"monastir@gmail.com",
  Adress:"Monastir center "
  Phone Number:73587491 
}
];


//function search center
function searchCenter(){
 $('#found').empty()
 var name = $('#search').val()
 for(var i = 0 ; i<center.length; i++){ 
  if(center[i].name.toUpperCase()===name.toUpperCase()){
    $("#found").append("<div class='category1'>" +center[i].Name+ " class='second'>" +center[i].E-mail"</div>");
}

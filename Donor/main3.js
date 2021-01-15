

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




//function searchCenter
var center= [{
  Name:"Tunis",
  Email:"tunis@gmail.com",
  Adress:"Beb Sadoun",
  PhoneNumber:71758321
},

{
 Name:"Beja",
  Email:"beja@gmail.com",
  Adress:"beja center",
  PhoneNumber:74758321 
},
{
Name:"Sousse",
  Email:"sousse@gmail.com",
  Adress:"sahloule ",
  PhoneNumber:73758321 
},
{
 Name:"Monastir",
  Email:"monastir@gmail.com",
  Adress:"Monastir center ",
  PhoneNumber:73587491 
}
];


//function search center
$("#place1").on('click',function(a){
  a.preventDefault()
 $('#found').empty()
 var name = $('#search').val()
 for(var i = 0 ; i<center.length; i++){ 
  if(center[i].Name.toUpperCase()===name.toUpperCase()){
    $("#found").append("<div class='category1'> <p> </br>"  +"Name:  "+center[i].Name+ " </br> </br>" +"Email:  " +center[i].Email +"</br> </br>"+"PhoneNumber:  "+center[i].PhoneNumber+"</br> </br>"+"Adress:  "+center[i].Adress+"</p></div>");

}
}
}
)
});


// list of center
$(document).ready(function(){
$("#place1").on('click',function(){
  $('.pair').hide();
    $('#check').hide();
    $('#btn').hide();
    $('#list').hide();
  $('.category1').show();
    

})
})
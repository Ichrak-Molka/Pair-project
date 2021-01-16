var i = 0;
function buttonClick() {
    i++;
    console.log(i)
    
    document.getElementById('inc').value = i;
    setTimeout(function(){ alert(i+" donator in our community now    "); }, 1000);
}
const submitButton=document.getElementById("submit");
var passcode = document.getElementById("passCode").value;

submitButton.addEventListener("click",function(){
    if(passcode == 1234){
        alert("hello"+passcode);
    }else{
        alert("no"+passcode);
    }
    
})
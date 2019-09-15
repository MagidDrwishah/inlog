
    var suname= window.localStorage.getItem('uname', uname.value);
    var spass = window.localStorage.getItem('pass',pass.value);
    document.getElementById("uname").value = suname;
    document.getElementById("pass").value = spass;



function login(){
    
var uname = document.getElementById("uname").value;
var pass = document.getElementById("pass").value;
window.localStorage.setItem("uname", uname);
window.localStorage.setItem('pass', pass);
if (uname=="test" && pass=="1234"){
   
    document.getElementById('page1').style.display="none";
    document.getElementById('page2').style.display="";
}
else{
    document.getElementById('page1').style.display="none";
    document.getElementById('page3').style.display="";

}
}
function back(){
    document.getElementById('page1').style.display="";
    document.getElementById('page2').style.display="none";
    localStorage.clear();
    document.getElementById("uname").value="";
    document.getElementById("pass").value="";
}

function forsok(){
    document.getElementById('page1').style.display="";
    document.getElementById('page3').style.display="none";
}


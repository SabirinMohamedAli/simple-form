

var CommonError =document.getElementById("commonErrors");

 function  Firstnamef(){
    var firstName =document.getElementById("firstName").value;
    if(firstName==""){
        CommonError.textContent="fil the name";
        CommonError.style.color ="red";
        return false;
    }if(firstName.match(tests))
         true;
        else{ 
            CommonError.textContent="Invalid Name";
            CommonError.style.color="red";
            return false;
    }
    firstName.focus()
    CommonError.textContent ="";
    return false;
    
     } 

function LastNameF(){
    var lastname=document.getElementById("lastName").value;
    var tests1 =/^[A-Za-z]+$/;

    if (lastname=="") {
        CommonError.textContent="Fil the blank space";
        CommonError.style.color="red";
        return false;
    }if (lastname.match(tests1)) true;
    else{
        CommonError.textContent="Invalid Name";
        return false;


    }
    CommonError.textContent="";
    return true;

}
 
//







    //function checking for Password Length

    function checkPasswordLenght(){
        var password=document.getElementById("password").value;
        if (password=="") {
            CommonError.textContent="password must greater than 6 character";
            CommonError.style.color="red";
            return false;
        } if (pass.length <6) {
            CommonError.textContent="Your pass is too lazy"
            CommonError.style.color="red";
            return false;
        }else{
            password.style.border='1pxsolid rgba(0,0,0,.125)';
            commonErrors.style.color="#000";
            commonErrors.textContent='';
                
           return true;
        }
        
        }
        








        
        
        
    
function EmailCheck(){
    var email =document.getElementById("email").value;
    var tests1=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email==""){
        CommonError.textContent="Enter your Email";
        return false;
    }if (email.match(tests1)) true; else{
        CommonError.textContent="Invalid email";
        CommonError.style.color="red";
        return false;
    }
    CommonError.textContent="";
    return true;
}


function chechPhone(){
    var phone =document.getElementById("phone").value;
    if (phone=="") {
        CommonError.textContent="Enter your phone"
        CommonError.style.color="red";
        return false;

    }if (phone.length <8 || phone.length>14) {
        CommonError.textContent="there are some mistake";
        CommonError.style.color="pink";
        return false;

    }
    CommonError.textContent="";
    return true;
}


var form =document.getElementById("signUpForm");

form.addEventListener('submit',function(event){
    event.preventDefault();

    var confirmPasword=document.getElementById("confirmPasword").value;
    var password =document.getElementById("password").value;
    if(password!=confirmPasword){
        CommonError.textContent="The password must be same!";
        return false;
    }

    

    var firstName =document.getElementById("firstName").value;
    var lastname=document.getElementById("lastName").value;
    var pass =document.getElementById("password").value;
    var email =document.getElementById("email").value;
    var phone =document.getElementById("phone").value;




    if(!firstName || !lastname || !pass || !email || !phone){
        CommonError.textContent='all feilds must not empty';
        CommonError.style.color="red";
        return false;
    }




    var firstName = document.getElementById("firstName").value;
    document.getElementById("result").innerHTML= "Full Name: "+firstName+" "+lastname + "<br>"+ "Your Email: " +email+"<br>"+"Phone: "+phone
    CommonError.textContent="Thank you, you have successfully registered";

    CommonError.style.color="grey";
})
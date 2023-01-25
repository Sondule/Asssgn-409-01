let fname=document.getElementById("Fname");
let lname=document.getElementById("lname");
let email=document.getElementById("email");
let pass=document.getElementById("Password");
let telephone=document.getElementById("Telephone");
let bio=document.getElementById("Bio");

let fError=false;
let lError=false;
let eError=false;
let pError=false;
let teError=false;
let bError=false;


function firstNamekey() {
   let firstNameError=document.getElementById("firstNameError");

   if(fname.value==""){
    fError=false;
    fname.setAttribute('style', "border:2px solid red;outline:none");
    firstNameError.innerHTML=`Enter First Name`;
   }

   else{
    firstNameError.innerHTML=""

    if(/[A-Z][a-z]*$/.test(fname.value) == false){
        fError=false;
        fname.setAttribute('style', "border:2px solid red;outline:none");
        firstNameError.innerHTML="First letter should be capital"
    }
    else{
        firstNameError.innerHTML=""
        if(fname.value.length<3){
            fError=false;
            fname.setAttribute('style', "border:2px solid red;outline:none");
            firstNameError.innerHTML="First Name contain must be more than 3-16character"
        }
        else{
            firstNameError.innerHTML=""
            fname.setAttribute('style', "border:2px solid green;outline:none");
            fError=true;
        }
    }
}
}

function lastNameKey() {
    let lastNameError=document.getElementById("lasttNameError");
    if(lname.value==""){
        lError=false;
        lname.setAttribute('style', "border:2px solid red;outline:none");
        lastNameError.innerHTML=`Enter last Name`;
       }
    else{
        lastNameError.innerHTML=""
        if(/[A-Z][a-z]*$/.test(lname.value) == false){
            lError=false;
            lname.setAttribute('style', "border:2px solid red;outline:none");
            lastNameError.innerHTML="First letter should be capital"
        }
        else{
            lastNameError.innerHTML=""
            if(lname.value.length<3){
                lError=false;
                lname.setAttribute('style', "border:2px solid red;outline:none");
                lastNameError.innerHTML="Last Name contain must be more than 3-16character"
            }
            else{
                lastNameError.innerHTML=""
                lname.setAttribute('style', "border:2px solid green;outline:none");
                lError=true;
    
            }
        }
    }
    
}

function emailKey() {
    let emailError=document.getElementById("emailError");
    if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3}[a-zA-Z\s])+$/.test(email.value) == false){
        eError=false;
        email.setAttribute('style', "border:2px solid red;outline:none");
        emailError.innerHTML="Please Enter valid email id e.g:example@gmail.com"
    }
    else{
        emailError.innerHTML=""
        email.setAttribute('style', "border:2px solid green;outline:none");
        eError=true;
    }
}

function passKey() {
    let passError=document.getElementById("passError");
    if(pass.value==""||/^[a-zA-Z0-9!@#$%^&*]{6,20}$/.test(pass.value)==false){
        pError=false;
        pass.setAttribute('style', "border:2px solid red;outline:none");
      passError.innerHTML=`Enter valid Password. password must be Alphabtic, alphanumeric and<br>
      special characters allowed and letter contain 6-20 characters `
    }
    else{
        passError.innerHTML=""
        pass.setAttribute('style', "border:2px solid green;outline:none");
        pError=true;
    }
}

function PhoneNumberKey() {
    let phoneNumberError=document.getElementById("phoneNumberError");

    if(telephone.value === "" || /^\w{9,9}\d+$/.test(telephone.value) == false){
        teError=false;
        telephone.setAttribute('style', "border:2px solid red;outline:none");
        phoneNumberError.innerHTML="Enter 10 digit number"
    }
     else{
        phoneNumberError.innerHTML=""
        if(telephone.value.length >10||telephone.value.length <10){
            teError=false;
            telephone.setAttribute('style', "border:2px solid red;outline:none");
            phoneNumberError.innerHTML="You enter more 10 digit number it is not valid "
        }
        else{
            phoneNumberError.innerHTML=""
            telephone.setAttribute('style', "border:2px solid green;outline:none");
            teError=true;
        }
     }
}


function bioKey() {
let bioError=document.getElementById("bioError");

    if(/^[a-z_ -]*$/.test(bio.value)==false){
        bError=false;
        bio.setAttribute('style', "border:2px solid red;outline:none");
        bioError.innerHTML="Bio must cotain only lowercase letter, underscore, hyphens<br> and it contain 8-50 character"
    }
    else{
        bioError.innerHTML=""
        bio.setAttribute('style', "border:2px solid green;outline:none");
        bError=true;
    }
} 
    

function submitData() {
   let btn=document.getElementById("button");
   if(fError==true&&lError==true&&eError==true&&pError==true&&teError==true&&bError==true){
    btn.setAttribute("style","background-color:green;outline:none;border:none");
   }
   else{
    btn.setAttribute("style","background-color:orange;outline:none;border:none")
   }
}
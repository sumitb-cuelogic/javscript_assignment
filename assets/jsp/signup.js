// function fun(){
//     document.getElementById("demo").innerHTML="hello world";

// }location.href="www.google.com";

var flag=false;
var username="";
function registerUser(event)
{
    event.preventDefault();
    if(flag!=false)
    {
       // location.href="www.google.com";
        // alert("donechecing");
        var newdata=adddata();
        //window.alert("username is "+newdata.email);
     username=newdata.email;
        localStorage.setItem(newdata.email,JSON.stringify(newdata));
         localStorage.setItem("username",username);
    //     document.getElementById("formdata").reset();
        location.href="./profile.html";
    }    
    else{
        alert("Please fill all required fields");
    }
}
    function newuserconst(email,fname,lname,password,gender,image)
    {
        this.email=email;
        this.fname=fname;
        this.lname=lname;
        this.password=password;
        this.gender=gender;
        this.image=image;  
    }
    function adddata(){
        console.log("inside adddata");
        var email=document.getElementById("email").value;
        var fname=document.getElementById("fname").value;
        var lname=document.getElementById("address").value;
        var password=document.getElementById("passwd1").value;
        var gender;
        if(document.getElementById('r1').checked)
        {
                gender=document.getElementById("r1").value;
        }
        else if(document.getElementById('r2').checked){
                gender=document.getElementById("r2").value;
        }
        else{
                 gender=document.getElementById("r3").value;
        }
        var image=document.getElementById("profimg").value;
        
        var newuser= new newuserconst(email,fname,lname,password,gender,image);

        return newuser;
    }

function ValidateEmail(mail) 
{
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value))
        {
            flag=true;
            mail.style.color="green";
            return (true)
        }
        else{

            flag=false;
            mail.style.color="red";  
           return (false);
        }



    }

function validatefname(fname){

if(/^[a-zA-Z ]{2,30}$/.test(fname.value))
    {
        flag=true;
        fname.style.color="green";
            return true;
    }
    else{flag=false;
            fname.style.color="red";
        return false;

    }
}
function validatePassword()
    {
        var pass1=document.getElementById("passwd1").value;
        var pass2=document.getElementById("passwd2").value;
        if(pass1===pass2)
        {
            document.getElementById("passmsg").innerHTML="";
            flag=true;
             return true;
        }
        else{flag=false;
          
           document.getElementById("passmsg").innerHTML="password do not matched !";
           return false;
        }
    }

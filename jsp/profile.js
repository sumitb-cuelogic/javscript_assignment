


function accessprofile()
{

    console.log("inside ");

    username=localStorage.getItem('username');
   
    var profileobj=JSON.parse(localStorage.getItem(username));

        document.getElementById("email").value=profileobj.email;
       document.getElementById("fname").value=profileobj.fname;
       document.getElementById("lname").value=profileobj.lname;
       document.getElementById("address").value=profileobj.address;
       document.getElementById("image").value=profileobj.image;
}
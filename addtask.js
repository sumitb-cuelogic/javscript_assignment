
function showMe () {
    document.getElementById("calender").style.display = "block";
  }

  function addtask(){

    var tasktext=document.getElementById("addtasktext").value;
    var categary;

            if( document.getElementById("radio1").checked){
                    categary=document.getElementById("radio1").value="public";
            }
            else{
                categary=document.getElementById("radio2").value="private";
            }
    var reminderdate=document.getElementById("calender").value;

        var tasktext= new task(tasktext,categary,reminderdate);

            var allentries=JSON.parse(localStorage.getItem("Allentries"));
            var username=localStorage.getItem("username");

            var currentuserindex=searchUser(username,allentries);
            alert(allentries[currentuserindex].email);

            if(allentries[currentuserindex].todo==undefined)
            {
                var todo=new Array();
            }

            todo.push(tasktext);
            allentries.push(todo);
            localStorage.setItem("Allentries",JSON.stringify(allentries));
            location.href("home.html");

  }

  function task(tasktext,categary,reminderdate){

    this.tasktext=tasktext;
    this.categary=categary;
    this.reminderdate=reminderdate;
    
  }

function searchUser(username,Allentries){

    for(var i=0;i<Allentries.length;i++)
    {
            if(username==Allentries[i].email)
            {
                profileobj=Allentries[i].email;
                return i;
            }
    }
    return false;
}
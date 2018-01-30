

function displaytask(){

var allentries= JSON.parse(localStorage.getItem("Allentries"));
var username=localStorage.getItem("username");

  var userindex=searchUser(username,allentries);
  // window.alert(userindex);
  // alert(JSON.stringify(allentries[userindex].todo[0]));
  var todolist= allentries[userindex].todo;
  //alert(todolist[0].tasktext);
  for(i=0;i<todolist.length;i++)
  {
    obj=todolist[i];
    var node = document.createElement("tr");
    node.setAttribute("id",i);
    document.getElementById("tabletask").appendChild(node);
    document.getElementById(i).innerHTML="<td>"+(i+1)+"<input id='selecttask"+i+"'+ type='checkbox'+ >"+"<td>"+obj.tasktext+"</td>"+"<td>"+obj.categary+
                                          "</td>"+"<td>"+obj.reminderdate+"</td>"+"<td>"+obj.status+"</td>";
  }
  // alert(JSON.stringify(todolist));  
}

function done(){


       var allentries=JSON.parse(localStorage.getItem("Allentries"));
        var username=localStorage.getItem("username");
        var userindex=searchUser(username,allentries);
       
        var todoobj=allentries[userindex].todo;
        var c=0;
       //alert(document.getElementById("selecttask"+c).checked);
      //   alert(todoobj[0].status);
      for(i=0;i<todoobj.length;i++)
      {
          if(document.getElementById("selecttask"+i).checked)
          {
                todoobj[i].status="done";
                var x=document.getElementById("selecttask"+i);
                  x.setAttribute("disabled","true");
          }
      }
        localStorage.setItem("Allentries",JSON.stringify(allentries));

        displaytask();
    }

    function deletetask(){

      var allentries=JSON.parse(localStorage.getItem("Allentries"));
      var username=localStorage.getItem("username");
      var userindex=searchUser(username,allentries);

        var todoobj=allentries[userindex].todo;
        for(i=0;i<todoobj.length;i++)
        {
                if(document.getElementById("selecttask"+i).checked)
                {
                      todoobj.splice(i,1);//can delete only one element at a time

                }
            
        }
        localStorage.setItem("Allentries",JSON.stringify(allentries));

       location.reload();

    }


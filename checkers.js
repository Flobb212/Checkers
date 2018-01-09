// Login functions
localStorage.usr;
var namesList = JSON.parse(localStorage["namesList"]);
var passwordList = JSON.parse(localStorage["passwordList"]);

if(namesList.length == 0)
{
  namesList[0] = "u0";
  namesList[1] = "u1";
  namesList[2] = "u2";

  localStorage["namesList"] = JSON.stringify(namesList);
}

if(passwordList.length == 0)
{
  passwordList[0] = "p0";
  passwordList[1] = "p1";
  passwordList[2] = "p2";

  localStorage["passwordList"] = JSON.stringify(passwordList);
}

function addUsername(thisName)
{
  console.log(namesList);
  var temp = JSON.parse(localStorage["namesList"]);
  temp.push(thisName);
  localStorage["namesList"] = JSON.stringify(temp);
  console.log(namesList);
}




function signUp(form)
{
  if(form.newUsername.value == "" || form.newPassword.value == "")
  {
    alert("Please enter a valid Password or Username");
  }
 else
 {
   addUsername(form.newUsername.value)
   localStorage.usr = form.newUsername.value;
   window.location.href = "lobby.html";
 }
}



function guestLogin()
{
  localStorage.usr = "Guest001";
  window.location.href = "lobby.html";
}




function memberLogin(form)
{
  var valid = false;
  var index;

  for(var i = 0; i < namesList.length; i++)
  {
    if(form.oldUsername.value == namesList[i])
    {
      valid = true;      
      index = i;
      break;
    }
  }

  if(valid)
  {
    if(form.oldPassword.value == passwordList[index])
    {
      localStorage.usr = form.oldUsername.value;
      window.location.href = "lobby.html";
    }
    else
    {
      alert("Incorrect password entered");
    }
  }
  else
  {
    alert("Incorrect username entered");
  }
}

function getUsr()
{

  document.getElementById('lobbyUser').innerHTML = localStorage.usr;
}


// AJAX
function doAJAX(url, cFunction)
{
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      cFunction(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function myFunction(xhttp)
{
  document.getElementById("demo").innerHTML = xhttp.responseText;
}

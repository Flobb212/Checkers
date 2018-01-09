// Login functions
localStorage.usr;

// Create new profile
function signUp(form)
{
  if(form.newUsername.value == "" || form.newPassword.value == "")
  {
    alert("Please enter a valid Username and Password");
  }
 else
 {
   createProfile(form.newUsername.value, form.newPassword.value);
   localStorage.usr = form.newUsername.value;
   window.location.href = "lobby.html";
 }
}

// Login as default guest
function guestLogin()
{
  localStorage.usr = "Guest001";
  window.location.href = "lobby.html";
}

// Check if profile exists currently
function memberLogin(form)
{
  var valid = false;
  var index;

  for(var i = 0; i < profList.length; i++)
  {
    console.log(form.oldUsername.value );
      console.log(profList[i]);
    if(form.oldUsername.value == profList[i].username)
    {

      valid = true;
      index = i;
      break;
    }
  }

  if(valid)
  {

    if(form.oldPassword.value == profList[index].password)
    {
      console.log(profList[index].username);
      localStorage.usr = profList[index].username;
      console.log(localStorage.usr);
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

// Get the username via the login used
function getUsr()
{
  document.getElementById('lobbyUser').innerHTML = "Username: " + localStorage.usr;
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

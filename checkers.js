// Login functions
localStorage.usr;
localStorage.played;
localStorage.won;
localStorage.lost;

// Create new profile
function signUp(form)
{
  if(form.newUsername.value == "" || form.newPassword.value == "")
  {
    alert("Please enter a valid Username and Password");
  }
 else
 {
   createProfile(form.newUsername.value, form.newPassword.value, 0, 0, 0);
   localStorage.usr = form.newUsername.value;
   localStorage.played = 0;
   localStorage.won = 0;
   localStorage.lost = 0;
   window.location.href = "lobby.html";
 }
}

// Login as default guest
function guestLogin()
{
  localStorage.usr = "Guest001";
  localStorage.played = 0;
  localStorage.won = 0;
  localStorage.lost = 0;
  window.location.href = "lobby.html";
}

// Check if profile exists currently
function memberLogin(form)
{
  var valid = false;
  var index;

  for(var i = 0; i < profList.length; i++)
  {
    if(form.oldUsername.value == profList[i].username)
    {
      valid = true;
      index = i;
      break;
    }
  }

  // If valid then the user name exists, so find matching password
  if(valid)
  {
    if(form.oldPassword.value == profList[index].password)
    {
      localStorage.usr = profList[index].username;
      localStorage.played = profList[index].gamesPlayed;
      localStorage.won = profList[index].gamesWon;
      localStorage.lost = profList[index].gamesLost;

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
  document.getElementById('lobbyUser').innerHTML = localStorage.usr;
  document.getElementById('plays').innerHTML = localStorage.played;
  document.getElementById('wins').innerHTML = localStorage.won;
  document.getElementById('losses').innerHTML = localStorage.lost;
}


// AJAX
function doAJAX(file)
{
  var call;
  call = new XMLHttpRequest();

  // Do this when the ready state changes
  call.onreadystatechange = function()
  {
    // 4 means request finished and 200 means everything is correct
    if (this.readyState == 4 && this.status == 200)
    {
      // Works through node.js and localhost
      // However not on AWS server
      document.getElementById("AJAXCall").innerHTML = call.responseText;
    }
  };

  // Request details(get something, from this location, asynchronous?)
  call.open("GET", file, true);
  call.send();
}

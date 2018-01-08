//Login functions
localStorage.usr = "guest001";
var usrnm;

function signUp(form)
{
  if(form.newUsername.value == "myuserid" && form.newPassword.value == "mypswrd")
  {
    usrnm = form.newUsername.value;
    window.open('lobby.html')
  }
 else
 {
   alert("Error Password or Username");
 }
}

function guestLogin()
{
  //usrnm = document.getElementByID("username");
  usrnm = "Guest";
  window.location.href = "lobby.html";
}

function memberLogin()
{
  if(form.newUsername.value == "myuserid" && form.newPassword.value == "mypswrd")
  {
    usrnm = form.newUsername.value;
    window.open('lobby.html')
  }
 else
 {
   alert("Error Password or Username");
 }
}

function getUsr()
{
  document.getElementById('lobbyUser').value = usrnm.innerHTML;
}


//Game functions
spawnPieces()
{
  //board.row1.col1.
}

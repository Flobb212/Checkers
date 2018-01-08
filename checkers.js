//Login functions
localStorage.usr = "guest001";
var usrnm = "unset";

function signUp()
{
  //usrnm = document.getElementByID("username");
  window.location.href = "lobby.html";
}

function guestLogin()
{
  //usrnm = document.getElementByID("username");
  usrnm = "Guest";
  window.location.href = "lobby.html";
}

function memberLogin()
{
  //usrnm = document.getElementByID("username");
  window.location.href = "lobby.html";
}

function getUsr()
{
  document.getElementById('lobbyUser').value = usrnm;
}


//Game functions
spawnPieces()
{
  //board.row1.col1.
}

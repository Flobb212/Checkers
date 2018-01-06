//Login functions
localStorage.usr = "guest001";
var usrnm;

function signUp()
{
  //usrnm = document.getElementByID("username");
  window.location.href = "localhost/lobby.html";
}

function guestLogin()
{
  //usrnm = document.getElementByID("username");
  //usrnm.innerHTML = "Guest";
  window.location.href = "localhost/lobby.html";
}

function memberLogin()
{
  //usrnm = document.getElementByID("username");
  window.location.href = "localhost/lobby.html";
}

function getUsr()
{
  document.getElementById('lobbyUser').innerHTML = usrnm.innerHTML;
}


//Game functions
spawnPieces()
{
  //board.row1.col1.
}

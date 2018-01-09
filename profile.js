var profList = [];

//var profList = JSON.parse(localStorage["profList"]);

if(profList.length == 0)
{
  createProfile("Derek123", "ham", 7, 4, 3);
  createProfile("DinkieDee", "dog", 11, 10, 1);
  createProfile("Marshmellow", "123454321", 3, 1, 2);

  localStorage["profList"] = JSON.stringify(profList);
}

function createProfile(user, pass)
{
  var profile = {username: user, password: pass, gamesPlayed: 0, gamesWon: 0, gamesLost: 0};

  profList.push(profile);
}

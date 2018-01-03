var http = require('http');
var fs = require("fs");

http.createServer(function(request, response)
{
  fs.readFile("login.html", function(err, data)
  {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
  });
}).listen(function()
{
  console.log('Sever listening')
});

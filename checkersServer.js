var http   = require('http');
var url    = require('url');
var fs     = require('fs');

http.createServer(function(request, response)
{
  pathName  = url.parse(request.url).pathname;

  fs.readFile('login.html', function(err, data)
  {
    response.writeHead(200);
    response.write(data);
    response.end();
  })
});

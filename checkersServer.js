var http   = require('http');
var url    = require('url');
var fs     = require('fs');

var server = http.createServer(function(request, response)
{
  if(request.url === '')
  {
    fs.readFile('login.html', function(err, data)
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        response.end();
    })
  }
  else if(request.url === '/checkersGame.html')
  {
    fs.readFile('checkersGame.html', function(err, data)
    {
        response.writeHead(200, {'Content-Type':'text/html'});
        response.write(data);
        response.end();
    })
  }
  else if (request.url === '/styles/styles.css')
  {
    fs.readFile('styles/styles.css', function(err, page)
    {
      res.writeHead(200, {'Content-Type': 'text/css'});
      var fileContents = fs.readFileSync('/checkers.css', {encoding: 'utf8'});
      response.write(fileContents);
      res.end();
    });
  }

});

server.listen(80);
console.log('Server running on port: 80');

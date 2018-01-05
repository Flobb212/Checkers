var http = require('http');
var path = require('path');
var fs = require('fs');

//Extensions valid
extensions =
{
	".html"  : "text/html",
	".css"   : "text/css",
	".js"    : "application/javascript",
	".png"   : "image/png"
};

//Create server
http.createServer(assembler).listen(80, function()
{
  console.log('Running on all engines Captain')
});

//Get file name and location
function assembler(request, response)
{
	var	fileName = path.basename(request.url) || 'login.html';
  var ext = path.extname(fileName);

	getFile(fileName, response, extensions[ext]);
};

//Check file exists and isn't going to break things
function getFile(filePath, response, fType)
{
	fs.exists(filePath, function(exists)
  {
		if(exists)
    {
			fs.readFile(filePath, function(err, contents)
      {
				if(!err)
        {
					response.writeHead(200,{ "Content-type" : fType, "Content-Length" : contents.length });
					response.end(contents);
				}
			});
		}
	});
};

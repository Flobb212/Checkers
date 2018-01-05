var http = require('http');
var path = require('path');
var fs = require('fs');

extensions =
{
	".html" : "text/html",
	".css" : "text/css",
	".js" : "application/javascript",
	".png" : "image/png",
	".gif" : "image/gif",
	".jpg" : "image/jpeg"
};

//helper function handles file verification
function getFile(filePath, res, mimeType)
{
	//does the requested file exist?
	fs.exists(filePath, function(exists)
  {
		//if it does...
		if(exists)
    {
			//read the file, run the anonymous function
			fs.readFile(filePath, function(err,contents)
      {
				if(!err)
        {
					//if there was no error
					//send the contents with the default 200/ok header
					res.writeHead(200,{ "Content-type" : mimeType, "Content-Length" : contents.length });
					res.end(contents);
				}
        else
        {
					//for our own troubleshooting
					console.dir(err);
				};
			});
		}
	});
};

//a helper function to handle HTTP requests
function requestHandler(req, res)
{
	var
	fileName = path.basename(req.url) || 'login.html',
	ext = path.extname(fileName),
	//localFolder = __dirname + '/public/',
  point =  fileName;

	//call our helper function
	//pass in the path to the file we want,
	//the response object, and the 404 page path
	//in case the requestd file is not found
	getFile(point, res, extensions[ext]);
};

//step 2) create the server
http.createServer(requestHandler)

//step 3) listen for an HTTP request on port 3000
.listen(3000);

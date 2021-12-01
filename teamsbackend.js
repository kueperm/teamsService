//Teams service app by Matt Kueper
//Based on concepts from:
//https://www.freecodecamp.org/news/how-to-deploy-a-nodejs-app-to-heroku-from-github-without-installing-heroku-on-your-machine-433bec770efe/
//Accessed 11/3/2021

const http = require('http');
const port = process.env.PORT || 3030

var fs = require('fs');

let rawteams = fs.readFileSync('NBAdatabase.json');
let parsedteams = JSON.parse(rawteams);

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Content-Type', 'application/json' );
  res.end(JSON.stringify(parsedteams));
});

server.listen(port,() => {
  console.log(`Server running on port `+port);
});
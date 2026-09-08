const http = require('http');
const path = require('path');
const fs = require('fs');

const htmlPath = path.join(__dirname, './public/index.html');
const cssPath = path.join(__dirname, './public/style.css');
const dataPath = path.join(__dirname, 'data.json'); 
const scriptPath = path.join(__dirname, './public/script.js');

function readData(){
    const data = fs.readFileSync(dataPath, 'utf-8');
    const jParse = JSON.parse(data);

    return jParse;
}

const server = http.createServer((req, res) => {
  const pathName = req.url

  if (pathName === "/") {
    const html = fs.readFileSync(htmlPath, 'utf-8');
    res.writeHead(200, {'Content-type' : 'text/html'});
    res.end(html);
  }else if(pathName === '/script.js'){
    const js = fs.readFileSync(scriptPath, 'utf-8');
    res.writeHead(200, {'Content-type': 'text/javascript'});
    res.end(js);
  }else if (pathName === "/style.css") {
    const css = fs.readFileSync(cssPath, 'utf-8');
    res.writeHead(200, {'Content-type' : 'text/css'});
    res.end(css);
  } else if(pathName==='/api/resources'){
    const data = readData();
    res.writeHead(200, {
      'Content-type': 'application/json'
    });
    res.end(JSON.stringify(data)); //always expects a string buffer.

  } else if(pathName === '/WebDev'){
    //leaving this for now.
  }
  
  else {
    res.writeHead(404, {'Content-type' : 'html/text'});
    res.end('<h1>404 Not Found</h1>');
  }
});





const PORT = 8001;
server.listen(PORT, ()=>{
console.log(`listening at PORT ${PORT}`);
});





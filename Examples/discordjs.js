const { detect } = require('../src/index'); //you should write "persian-bad-words"

//Discord.js event
client.on("message", async (msg) => {
     if(detect(msg.content)) {
          setTimeout(() => {
               msg.delete();
               //something else...
          })
     }
}) 
  

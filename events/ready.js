const client = require("../index");

client.on("ready", () => {
    
client.user.setActivity(`shot on iphone memes | /shot-on-iphone to watch memes`, {
    type: "WATCHING",
  });
    console.log(`${client.user.tag} is up and ready to go!`)
});

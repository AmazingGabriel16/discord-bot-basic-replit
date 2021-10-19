// Discord version 13 and above uses Node.js 16+
// IDE needs to be update
// Otherwise use version "^12.5.3"

// Replit section start
// This code is required for you to use the Discord bot in Replit.
// Be sure to download the express package and the discord.js package.
const express = require("express")
const app = express()

app.get("/", (req, res) => {
  res.send("Hi there!")
})

app.listen(3000, () => {
  console.log("Athena has arrived!")
})
//  Replit section end

// Copied code from glitch.com

let Discord = require("discord.js")
let client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })

// Message event reads every new message
client.on("message", message => {
  if (message.content === "ping")
  {
    message.channel.send("pong")
  }
  else if (message.content === "tpose")
   {
    message.channel.send("https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.kym-cdn.com%2Fentries%2Ficons%2Foriginal%2F000%2F031%2F042%2Fcover2.jpg&f=1&nofb=1")
  }
})

// Set up your env!
client.login(process.env.token)

const { TOKEN } = require("./config.json");
const Discord = require("discord.js");

const bot = new Discord.Client({ intents: 3276799 });

bot.login(TOKEN);

bot.on("ready", async () => {
  console.log(`Connecté avec ${bot.user.tag}!`);
  bot.user.setActivity("Troller les gens");
});

bot.on("messageCreate", async (message) => {
  if (
    message.content.toLowerCase().includes("quoicoubeh") ||
    message.content.toLowerCase().includes("t'as les crampté") ||
    message.content.toLowerCase().includes("apagnan")
  ) {
    message.delete();
  } else if (message.content.toLowerCase().includes("quoi")) {
    return message.reply("Feur ?");
  }
  if (
    message.content.toLowerCase().includes("hein")
  )
    return message.reply("Deux");
  if (message.mentions.users.size > 0) {
    if (message.mentions.users.has(bot.user.id))
      return message.reply("J't'emmerde je fais ce que je veux.");
  }
});

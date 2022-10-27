const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const axios = require("axios");

const client = new Client({
  // puppeteer: { headless: false },
  authStrategy: new LocalAuth(),
});

client.initialize();

client.on("qr", (qr) => {
  // Generate and scan this code with your phone
  console.log("QR RECEIVED", qr);
});

client.on("authenticated", () => {
  console.log("AUTHENTICATED");
});

client.on("ready", () => {
  console.log("Client is ready!");
});

client.on("message", async (msg) => {
  if (msg.body) {
    axios
      .get(
        `https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${encodeURIComponent(
          msg.body
        )}`
      )
      .then(async (res) => {
        if (res.data.error) {
          msg.reply("No card matching your query was found in the database.");
        } else {
          const media = await MessageMedia.fromUrl(
            res.data.data[0].card_images[0].image_url
          );
          client.sendMessage(msg.from, media, {
            caption: `Name : ${res.data.data[0].name}\nType : ${res.data.data[0].type}\nDesc : ${res.data.data[0].desc}
            `,
          });
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
});

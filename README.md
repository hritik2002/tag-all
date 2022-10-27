# tag-all whats-app bot

## Introduction

Whats-app bot which tags(mentions) all the participants in a group when '@team' or '@everyone' is sent.

## Required Libraries

Installing the library from npm requires first installing `node.js 12` or higher, followed by installing library from the npm package.

Installing `whatsapp-web.js`:

```bash
$ npm install whatsapp-web.js

or

$ yarn add whatsapp-web.js
```

Installing `qr-code-terminal`:

```bash
$ npm install qr-code-terminal

or

$ yarn add qr-code-terminal
```

## How to Run Program

Create a file called `app.js` in the project and paste this code into it.

```javascript
const qrcode = require("qrcode-terminal");
const { Client } = require("whatsapp-web.js");

const client = new Client();

client.initialize();

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});
```

Then, on the terminal or command prompt, type this command.

```bash
$ node app

or

$ node app.js
```

When the command is executed, a QR code appears, which we will scan with the Whatsapp account we used to create the bot.

<img
  alt='QR code'
  src='https://res.cloudinary.com/dlpb6j88q/image/upload/v1649589295/jagad.dev/posts/how-to-create-a-whatsapp-bot-with-node-js/Qr_code_mkrfyt.png'
/>

Once, installation is done, go to the group chat and send '@team' or '@everyone'.

![WhatsApp Image 2022-10-27 at 11 11 07 AM](https://user-images.githubusercontent.com/72138429/198201158-77d8ec3f-bfdd-4b0b-a308-d294f7be244b.jpeg)


**References**: https://github.com/jagadyudha/yugioh-whatsapp-bot, https://wwebjs.dev/guide/

**Credits**: https://github.com/jagadyudha/yugioh-whatsapp-bot

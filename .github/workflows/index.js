const accountSid = "AC95acc14747d76d4af9dbfe350b4652c4";
const authToken = "72420e99c2af7b0c08fd5ab5d22df9c7";

const client = require("twilio")(accountSid, authToken);

client.messages
  .create({
    body: "Code Pushed in main branch of https://github.com/ShivamK2002/testWhatsapp/actions",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+919370810285",
  })
  .then((message) => console.log("Message ID:", message.sid));

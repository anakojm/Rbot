<div align="center">
  <img src="https://cdn.discordapp.com/app-icons/560179137499889687/51c20803c622390debbdae2c8bb9b558.png"><br>
  <b>Rbot is a Discord Bot made using discord.js and node js, made to play radio stations.</b><br><br>

  <p>
    <a href="https://discord.com/oauth2/authorize?response_type=code&client_id=560179137499889687&scope=bot&permission=8&redirect_uri=https://github.com/anakojm/Rbot" target="_blank"><img
    src="https://img.shields.io/badge/Invite-me%20to%20your%20Discord%20server-7289da.svg" alt "Invite Rbot"><img src="https://img.shields.io/github/license/anakojm/Rbot" alt="License"/></a>
  </p>
</div>

[![pipeline status](https://gitlab.com/anakojm/rbot/badges/master/pipeline.svg)](https://gitlab.com/anakojm/rbot/-/commits/master) [![pipeline status](https://img.shields.io/discord/642785703264256011)](https://discord.gg/mJmjEU39sS) 

### Commands:
- `Rb/play` - Join to your channel and play the music selectioned
- `Rb/list` - List all radio avalaible (~75)
- `Rb/help` - Display help message
- `Rb/leave` - Leaves the voice channel
- `Rb/invite` - Generate an invitation link you can use to invite the bot to your server

### How to have your version of Rbot:
1. Download ([nodejs](https://nodejs.org/es/))
2. Download ([ffmpeg](https://ffmpeg.org/))
3. Create a new [application](https://discord.com/developers/applications/)
4. Create a new bot in your application
5. Invite your bot to your server with https://discordapi.com/permissions.html (client id is in general information of your application)
6. Clone: `git clone https://github.com/anakojm/Rbot.git`
7. Change directory: `cd Rbot`
8. Install dependencies: `npm install`
9. Replace `process.TOKEN` by your token in `bot.login("process.TOKEN");` in last line of index.js
10. launch with `node index.js`

[![Repo on GitHub](https://img.shields.io/badge/repo-GitHub-3D76C2.svg)](https://github.com/anakojm/Rbot)
[![Repo on GitLab](https://img.shields.io/badge/repo-GitLab-6C488A.svg)](https://gitlab.com/anakojm/Rbot)

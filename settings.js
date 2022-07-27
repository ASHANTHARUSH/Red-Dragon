//════════════(00)════════════════\\
//
//          RED DRAGON v6.0
//
//════════════(00)════════════════\\

const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}

//customize settings\\

global.alivemsg = `My name is Tharusha Ashan 🔥
My Creator is Tharusha ashan😎` //Costomize Alive Message (type your message in `` )

global.owner = ['+94710330800'] //Owner number in aive msg
global.premium = ['+94710330800'] //Owner Number info
global.ownernomer = '+94710330800' //Owner Number <<<

global.ownername = '😎ASHAN OFFICE' //Owner Name
global.botname = ' ASHAN OFFICE' //Bot Name

global.button = '☰ YOUTUBE ☰' //Costomize A Button Name In Alive Message
global.btnurl = 'https://www.youtube.com/channel/UCxUr80-Cfr40KOyAqYo4Ofw' //Change Your Button's URL

global.region = 'India, South India, Kerala' //Country Region

global.packname = '☬ASHAN OFFICE࿐' //Bot Pacage Name
global.author = '😎THARUSHA ASHAN❯❯' //Author Name
global.prefa = ['','!','.','😂','❤️','💠'] //Command Prefix eg:(.alive ,alive 😂alive)
global.sessionName = 'session' //Session Name!
global.sp = '⭔' //A Charactor
global.dragonemoji = '🧩' // Menu emoji
global.footer = 'ASHAN OFFICE.' //In list menu
global.chatbotpre = 'true'  // Chat bot true/false

global.ig = 'https://www.youtube.com/channel/UCxUr80-Cfr40KOyAqYo4Ofw' //Github Account!

global.mess = { // COSTOMIZE WITH YOUR LANGUAGE
	
    success: 'Done ✅',
    admin: 'Only Admins can use it!😉',
    botAdmin: 'Bot wants to be an Admin😥',
    owner: 'Only Owner can use this!😉',
    group: 'Feature Used Only For Groups!',
    private: 'This Features Only For Private Chat!',
    bot: 'This Feature Is Only For Bot😝',
    wait: '👉👈Pleas Wait...',
    error: 'Error!!! Maybe Api Key Is Expired🤔!',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
// DO NOT CHANGE \\
    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
global.thumb = fs.readFileSync('https://i0.wp.com/freedownloadmves.com/wp-content/uploads/2021/03/tumblr_inline_owic7vKxj51s6lkn6_640-e1615179421866.jpg?resize=500%2C382&ssl=1.jpg')
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
global.flasmurf =
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})

/**
   * Made By Fandyyy 🕴️
   * Subscribe FBOTZ YT
   * Follow https://instagram.com/_nzrlafndi
   * Follow https://github.com/FBOTZ-YT
*/

const fs = require('fs')
const chalk = require('chalk')

//Ubah Disini
global.ownerNumber = ['380942412294','0']
global.ownerName = 'Jon Kristiansah Silaban'
global.packname = 'Siappudan ni omak:)'
global.author = 'Sitinjo punya cerita™'
global.prefa = ['','!','.','#','!'] //Ilangin Prefix Yang '' Kalau Gamau No Prefix
global.sessionName = 'sesi'

//Message Nya Ubah Disini
global.mess = {
admin: 'You Are Not Admin!',
botAdmin: 'Bot Not Admin!',
botOwner: 'You Are Not My Owner!',
group: 'Only Group!',
private: 'Only Private Chat',
wait: 'Loading...',
done: 'Done!'
}


//Sesuaikan
global.thumb = fs.readFileSync('.jonkristiansah.silaban_I_2022_Sep_09_12_31_10.jpg.jpeg')
global.donasi = fs.readFileSync('.Screenshot_2022-09-11-18-10-36.png.jpg')
global.thumbnail = fs.readFileSync('.jonkristiansah.silaban_I_2022_Sep_09_12_31_10.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})

const os = require('os')
const fs = require('fs')
const path = require('path')
const filePath = path.join(__dirname, 'INFO OS', 'OS.txt')

fs.mkdir(path.join(__dirname, 'INFO OS'), (err) => {
  if (err) {
    throw err
  }
  console.log('Папка создана')
})


fs.appendFile(filePath, '[OS]: ' + os.platform() +
'\n[FREEMEM]: ' + os.freemem() +
'\n[TOTALMEM]: ' + os.totalmem() +
'\n[ARCH]: ' + os.arch() +
'\n[HOMEDIR]: ' + os.homedir() +
'\n[UPTIME]: ' + os.uptime()/60 , err => {
  if (err) {
    throw err
  }
  console.log('Файл создан')
})

fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }

})

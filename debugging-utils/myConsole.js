const { Transform } = require('stream')
const myConsole = new console.Console(process.stdout, process.stderr)

color = {
  "red": { "bold": "\x1b[1;31m", "normal": "\x1b[0;31m" },
  "green": { "bold": "\x1b[1;32m", "normal": "\x1b[0;32m" },
  "white": { "bold": "\x1b[1;37m", "normal": "\x1b[0;37m" },
  "violet": { "bold": "\x1b[1;35m", "normal": "\x1b[0;35m" },
} //clicolors ascii

myConsole.log = (msg) => {
  console.log(`${color.violet.bold}[MESSAGE] => ${color.violet.normal}${msg}${color.white.normal}`)
}

myConsole.error = (err) => {
  console.error(`${color.red.bold}[ERROR] => ${color.red.normal}${new Error(err)}${color.white.normal}`)
}

myConsole.info = (info) => {
  console.info(`${color.green.bold}[INFO] => ${color.green.normal}${info}${color.white.normal}`)
}

myConsole.warn = (warn) => {
  console.warn(`${color.red.bold}[WARNING] => ${color.white.bold}${warn}${color.white.normal}`)
}

const days = ['Domingo', 'Lunes', 'Martes',
  'Miercoles', 'Jueves', 'Viernes', 'Sábado'] // domingo es el primer día según MDN

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    chunk = chunk.toString()
    chunk = chunk.split("/")
    let [day, month, year] = chunk
    date = new Date(`${month}/${day}/${year}`)
    if (date == 'Invalid Date') { // si la fecha está mal escrita
      myConsole.error('la fecha que ingresaste no es válida. Formato: DD/MM/YYYY')
    } else {
      formatDate = `${day}/${month}/${year}`
      myConsole.info(`Resultado: `)
      this.push(`Naciste el ${formatDate} un día ${days[date.getDay()]}\n`)
    }
    callback()
  }
})

myConsole.log('Hola, ingresa tu fecha de nacimiento en el siguiente formato: DD/MM/YYYY')
process.stdin.pipe(transformStream).pipe(process.stdout)
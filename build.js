// Importando os módulos necessários
import fs from 'fs'
import path from 'path'
import { minify } from 'uglify-js'

// Obtendo o caminho para a pasta contendo os arquivos JS
const jsFolder = path.join('dist', 'js')

// Lendo o conteúdo dos arquivos JS
const fileContents = fs.readdirSync(jsFolder).map((fileName) => {
   const filePath = path.join(jsFolder, fileName)
   return {
      name: fileName,
      content: fs.readFileSync(filePath, 'utf-8')
   }
})

// Minificando o código dos arquivos JS
fileContents.forEach((file) => {
   const result = minify(file.content)
   const filePath = path.join(jsFolder, file.name)
   fs.writeFileSync(filePath, result.code)
})

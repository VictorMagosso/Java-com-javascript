const rs = require('readline-sync')
const fs = require('fs')

const userJson = "user.json"
const userBuffer = fs.readFileSync(userJson)
const newUser = JSON.parse(userBuffer)

const opcoes = rs.question('O que você deseja fazer?\nCadastrar | Deletar | Consultar\n===============================\n').toUpperCase()

switch (opcoes){
    case "CADASTRAR":
const salvarDados = () => ({
    nome: rs.question('Informe seu nome: ').toUpperCase(),
    idade: rs.questionInt('Informe sua idade: ')
})
newUser.push(salvarDados())
    break;

    case "DELETAR":
        newUser.pop()
        break;

    case "CONSULTAR":
        console.log(newUser)
}
const userString = JSON.stringify(newUser)
fs.writeFileSync(userJson, userString)


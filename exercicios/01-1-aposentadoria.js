// Verificação de Aposentadoria

const nome = 'Marcio'
const sexo = 'M'
const idade = 66
const contribuicao = 35

if(sexo == 'F') {
    if(contribuicao >= 30 && (idade + contribuicao) >= 85){
        console.log(`${nome}, você pode se aposentar.`)
    }
    else {
        console.log(`${nome}, você não pode se aposentar.`)
    }
}

if(sexo == 'M') {
    if(contribuicao >= 35 && (idade + contribuicao) >= 95){
        console.log(`${nome}, você pode se aposentar.`)
    }
    else {
        console.log(`${nome}, você não pode se aposentar.`)
    }
}



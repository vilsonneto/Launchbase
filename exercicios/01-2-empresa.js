// Construção e apresentação de objeto empresa

const empresa = {
    nome: 'Rocketseat',
    cor: 'roxo',
    foco: 'programação',
    endereço: {
        rua: 'Rua Guilherme Gembala',
        numero: '260'
    }
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.numero}.`)
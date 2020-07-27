// Dados de um programador

const nome = 'Carlos'
const idade = 32
const tecnologias = {
    propriedades: [
        {nome: 'C++', especialidade: 'Desktop'},
        {nome: 'Python', especialidade: 'Data Science'},
        {nome: 'JavaScript', especialidade: 'Web/Mobile'}
    ]
}

console.log(`O usuário ${nome} tem ${idade} anos e usa a tecnologia ${tecnologias.propriedades[0].nome} com especialidade em ${tecnologias.propriedades[0].especialidade}.`)
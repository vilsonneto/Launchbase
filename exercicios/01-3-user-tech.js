// Informações de usuários

const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

//Criar função que verifica se o usuário usa a tecnologia CSS
function checarSeUsaCSS(usuario) {
    for (let tecnologia of usuario.tecnologias) {
        if (tecnologia == "CSS") {
            return true
            }
    }
}

// enviar mensagem mostrando quem usa a tecnologia CSS
for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checarSeUsaCSS(usuarios[i]);

    if (usuarioTrabalhaComCSS) {
        console.log(`${usuarios[i].nome} trabalha com CSS.`)
    }
}
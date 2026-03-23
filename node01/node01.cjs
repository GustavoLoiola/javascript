import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let usuarios = [];

mostrarMenu = () => {
    console.log(`
            MENU PRINCIPAL
            1 - Cadastrar usuário
            2 - Listar usuários
            3 - Remover usuário
            4 - Sair`)

            rl.question('>', (opcao) => {
                switch(opcao) {
                    case '1': cadastrarUsuario()
                    break

                    case '2': listarUsuarios()
                    break

                    case '3': removerUsuarios()
                    break

                    case '4': console.log('Fim do Programa!')
                    break

                    default: console.log('Opção inválida!')
                    mostrarMenu()

                }
})
}

const cadastrarUsuario = () => {
    rl.question(('Digite o nome do usuário: '), (nome) => {
        usuarios.push(nome)
        console.log('Usuário cadastrado!')
        mostrarMenu()
    })
}

const listarUsuarios = () => {
    if(usuarios.length == 0) {
        console.log("Nenhum usuário cadastrado!") 
    }
    else {
       for(let i = 0; i < usuarios.length; i++) {
        console.log(`Usuário ${c} - ${usuarios[c]}`)
       }
    }

    mostrarMenu()
}



mostrarMenu()
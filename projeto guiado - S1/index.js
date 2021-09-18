console.log('==================================')
console.log("Projeto -  Sistemas de livro")
console.log("Aluna: Amanda Santos")
console.log("Turma On14 - Backend");
console.log('==================================')

//vamos instanciar, o nosso banco de dados
// Importa o array de objetos que foi exportado da database.js

const livros = require("./database");
console.log(`A quantidade de arrays nesse projeto é: ${livros.length}`);
console.log("Esses são os nossos livros disponíveis no sistema: ");
livros.sort((a, b) => a.paginas - b.paginas);
console.table(livros);

//importar a ferramenta readline-sync
const pegarEntrada = require("readline-sync")

//como fazer uma pergunta que vai ser respondida no terminal

const verLivrosGenero = pegarEntrada.question("Voce deseja ver os livros por genero? (SIM/NAO)").toLocaleUpperCase()
console.log(verLivrosGenero);

//verificando a partir da entrada e mostrando os próximos passos do meu sistema

if(verLivrosGenero === "SIM"){  
    console.log("Temos os generos ROMANCE, ESPIRITA, DRAMA e AUTO AJUDA");
    //caso escolha por genero
    const qualGenero = pegarEntrada.question("Qual genero voce deseja ver?").toLocaleUpperCase()

function generoLivros(livros){
    return livros.genero === qualGenero
}

const generosEncontrados = livros.filter(generoLivros)
console.table(generosEncontrados);

}else{
    console.log("Esses são todos os genero: ");
    livros.sort((a, b) => a.paginas - b.paginas)
    console.table(livros)

}

//ordenar por quantidade de paginas do menor para o maior

/*function ordenarPag.sort((a, b){
    if(a.paginas > b.paginas){
    console.table(ordenarPag)
}else{
    console.table(livros)
}
)}
*/

//agora vamos fazer a parte de recomendar

const verLivrosRecomend = pegarEntrada.question("Voce deseja ver os livros recomendado? (SIM/NAO)").toLocaleUpperCase()
console.log(verLivrosRecomend);

if(verLivrosRecomend === "SIM"){  
    console.log("Temos os esses livros recomendados: ");

function paraLer (livro){
    return livro.recomenda === true
}

const recomendaLivros1 = livros.filter(paraLer)
livros.sort((a, b) => a.paginas - b.paginas)
console.table(recomendaLivros1);

}else{
    console.log("Ok!")
}

//agora vamos fazer a parte do leu ou não

const verLivrosLidos = pegarEntrada.question("Voce deseja ver os livros que já foram lidos? (SIM/NAO)").toLocaleUpperCase()
console.log(verLivrosLidos);

if(verLivrosLidos === "SIM"){  
    console.log("Temos os esses livros que já foram lidos: ");

function paraLidos (livro){
    return livro.leu === true
}

const livrosLidos = livros.filter(paraLidos)
livros.sort((a, b) => a.paginas - b.paginas)
console.table(livrosLidos);

}else{
    console.log("Ok!")
}

console.log("Obrigada e volte sempre! <3");

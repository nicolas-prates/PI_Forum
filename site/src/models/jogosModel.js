var database = require("../database/config")

function cadastrarjogo(idUsuario, lista) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var values = ""
    for(var i = 0; i < lista.length; i++){
        if(i == (lista.length -1)){
            values += `(${idUsuario}, ${lista[i]});`
        } else {
            values += `(${idUsuario}, ${lista[i]}),`
        }
    }
    var instrucao =
    `
    insert into jogosUsuario values ${values}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function buscar(idUsuario) {
    console.log(
      "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
    var instrucao = 
    `
    select distinct fkjogos, count(fkjogos) as contagem, jogo.nome from jogosusuario join jogo on jogo.id = jogosusuario.fkjogos group by fkjogos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
    cadastrarjogo,
    buscar
}
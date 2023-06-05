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

function buscar() {
    console.log(
      "ACESSEI O buscar1"
    );
    var instrucao = 
    `
    select distinct fkjogos, count(fkjogos) as contagem, jogo.nome from jogosusuario join jogo on jogo.id = jogosusuario.fkjogos group by fkjogos;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function buscar2() {
    console.log(
      "acessei o buscar2"
    );
    var instrucao = 
    `
    SELECT  date_format(str_to_date(criado_em, '%Y-%m-%d %H:%i:%s'), '%b %d %Y') as data, count(id) as inserts
    FROM posts
    WHERE 
      date(criado_em) BETWEEN CURRENT_DATE()-7 AND CURRENT_DATE()+1 group by data order by data desc;

    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function buscar3() {
    console.log(
      "ACESSEI O buscar3"
    );
    var instrucao = 
    `
    select distinct count(topicoDoJogo_fkJogos) as contagem, jogo.nome from posts right join jogo on jogo.id = posts.topicoDoJogo_fkJogos group by jogo.nome;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
    cadastrarjogo,
    buscar,
    buscar2,
    buscar3
}
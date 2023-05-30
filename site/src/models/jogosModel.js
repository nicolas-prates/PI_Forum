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
    SELECT date_format(str_to_date(d.data, '%Y-%m-%d %H:%i:%s'), '%b %d %Y') as data, COUNT(p.id) AS inserts
    FROM (
      SELECT CURDATE() - INTERVAL (a.a + (10 * b.a) + (100 * c.a)) DAY AS data
      FROM (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6) AS a
      CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6) AS b
      CROSS JOIN (SELECT 0 AS a UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6) AS c
    ) d
    LEFT JOIN posts p ON DATE(p.criado_em) = d.data
    WHERE d.data >= CURDATE() - INTERVAL 6 DAY
    GROUP BY d.data;

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
var database = require("../database/config");

function buscar(idUsuario) {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    select jogo.nome as nomejogo, topicos.nome as nometopico, topicodojogo.fkJogos as idjogo, topicodojogo.fktopicos as idtopico from jogosusuario join jogo
	on jogo.id = jogosusuario.fkjogos
		join topicodojogo
			on jogosusuario.fkjogos = topicodojogo.fkjogos
				join topicos on topicos.id = topicodojogo.fktopicos
                where fkusuario = "${idUsuario}";
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarposts(idjogo, idtopico) {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    select posts.id, posts.body, posts.titulo,  date_format(str_to_date(posts.criado_em, '%Y-%m-%d %H:%i:%s'), '%b %d %Y %H:%i:%s') as criado_em, usuario.login from posts join usuario
    on posts.fkusuario = usuario.id 
    where topicodojogo_fkjogos = ${idjogo} and topicodojogo_fktopicos = ${idtopico}
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function listarpost(idpost) {
    console.log(
      "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
    var instrucao = `
      select posts.id, posts.body, posts.titulo,  date_format(str_to_date(posts.criado_em, '%Y-%m-%d %H:%i:%s'), '%b %d %Y %H:%i:%s') as criado_em, usuario.login from posts join usuario
      on posts.fkusuario = usuario.id 
      where posts.id = ${idpost}
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

  function listarcomentarios(idpost) {
    console.log(
      "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
    var instrucao = 
    `
    select comentarios.body,  date_format(str_to_date(comentarios.criado_em, '%Y-%m-%d %H:%i:%s'), '%b %d %Y %H:%i:%s') as criado_em, usuario.login from comentarios join usuario
    on comentarios.fkusuario = usuario.id
    join posts on comentarios.fkposts = posts.id
    where posts.id = ${idpost};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

function criarpost(postbody, posttitle, idjogo, idtopico, idUsuario) {
  console.log(
    "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
  );
  var instrucao = `
    insert into posts values
    (null, '${postbody}', '${posttitle}', now(), ${idjogo}, ${idtopico}, ${idUsuario}); 
    `;
  console.log("Executando a instrução SQL: \n" + instrucao);
  return database.executar(instrucao);
}

function criarcomentario(comentario, idpost, idUsuario) {
    console.log(
      "ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()"
    );
    var instrucao = `
    insert into comentarios values
    (null, '${comentario}', now(), ${idpost}, ${idUsuario});
      `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
  }

module.exports = {
  buscar,
  listarposts,
  listarpost,
  listarcomentarios,
  criarpost,
  criarcomentario
};

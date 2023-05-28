var database = require("../database/config")

function buscar(idUsuario) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao =
    `
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

function listar(idjogo, idtopico) {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
    select * from posts where topicodojogo_fkjogos = ${idjogo} and topicodojogo_fktopicos = ${idtopico}
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    buscar,
    listar
}
CREATE database playersretreat;
USE playersretreat ;

CREATE TABLE jogo (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE  topicos (
  id INT NOT NULL AUTO_INCREMENT,
  nome VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE  topicodojogo (
  fkJogos INT NOT NULL,
  fkTopicos INT NOT NULL,
  PRIMARY KEY (fkJogos, fkTopicos),
  INDEX fk_topicoDoJogo_topicos1_idx (fkTopicos ASC) VISIBLE,
  INDEX fk_topicoDoJogo_jogo_idx (fkJogos ASC) VISIBLE,
  CONSTRAINT fk_topicoDoJogo_jogo FOREIGN KEY (fkJogos) REFERENCES playersretreat.jogo (id),
  CONSTRAINT fk_topicoDoJogo_topicos1 FOREIGN KEY (fkTopicos) REFERENCES playersretreat.topicos (id));

CREATE TABLE  usuario (
  id INT NOT NULL AUTO_INCREMENT,
  login VARCHAR(45) NOT NULL,
  email VARCHAR(45) NOT NULL,
  senha VARCHAR(45) NOT NULL,
  PRIMARY KEY (id));

CREATE TABLE  posts (
  id INT NOT NULL auto_increment,
  body TEXT NOT NULL,
  titulo TEXT NOT NULL,
  criado_em DATETIME NOT NULL,
  topicoDoJogo_fkJogos INT NOT NULL,
  topicoDoJogo_fkTopicos INT NOT NULL,
  fkUsuario INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_posts_topicoDoJogo1_idx (topicoDoJogo_fkJogos ASC, topicoDoJogo_fkTopicos ASC) VISIBLE,
  INDEX fk_posts_usuario1_idx (fkUsuario ASC) VISIBLE,
  CONSTRAINT fk_posts_topicoDoJogo1 FOREIGN KEY (topicoDoJogo_fkJogos , topicoDoJogo_fkTopicos) REFERENCES playersretreat.topicodojogo (fkJogos , fkTopicos),
  CONSTRAINT fk_posts_usuario1 FOREIGN KEY (fkUsuario) REFERENCES playersretreat.usuario (id));

CREATE TABLE  comentarios (
  id INT NOT NULL auto_increment,
  body TEXT NOT NULL,
  criado_em DATETIME NULL DEFAULT NULL,
  fkPosts INT NOT NULL,
  fkUsuario INT NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_comentarios_posts1_idx (fkPosts ASC) VISIBLE,
  INDEX fk_comentarios_usuario1_idx (fkUsuario ASC) VISIBLE,
  CONSTRAINT fk_comentarios_posts1 FOREIGN KEY (fkPosts) REFERENCES playersretreat.posts (id),
  CONSTRAINT fk_comentarios_usuario1 FOREIGN KEY (fkUsuario) REFERENCES playersretreat.usuario (id));

CREATE TABLE  jogosusuario (
  fkUsuario INT NOT NULL,
  fkJogos INT NOT NULL,
  PRIMARY KEY (fkUsuario, fkJogos),
  INDEX fk_JogoDoUsuario_jogo1_idx (fkJogos ASC) VISIBLE,
  INDEX fk_JogoDoUsuario_usuario1_idx (fkUsuario ASC) VISIBLE,
  CONSTRAINT fk_JogoDoUsuario_jogo1 FOREIGN KEY (fkJogos) REFERENCES playersretreat.jogo (id),
  CONSTRAINT fk_JogoDoUsuario_usuario1 FOREIGN KEY (fkUsuario) REFERENCES playersretreat.usuario (id));

select * from jogo;
select * from topicodojogo;

insert into jogo values
(1,	'Metin2'),
(2, 'Mu Online'),
(3,	'Tera'),
(4, 'New World'),
(5,	'Albion Online');

insert into topicos values
(null, 'Builds'),
(null, 'Crafting'),
(null, 'Farms'),
(null, 'Quests'),
(null, 'Tips'),
(null, 'Guides'),
(null, 'Others');

insert into topicodojogo values
(1,	1),
(2,	1),
(3,	1),
(4,	1),
(5,	1),
(2,	2),
(4,	2),
(5,	2),
(1,	3),
(2,	3),
(3,	3),
(4,	3),
(5,	3),
(1,	4),
(2,	4),
(3,	4),
(4,	4),
(5,	4),
(1,	5),
(2,	5),
(3,	5),
(4,	5),
(5,	5),
(1,	6),
(2,	6),
(3,	6),
(4,	6),
(5,	6),
(1,	7),
(2,	7),
(3,	7),
(4,	7),
(5,	7);
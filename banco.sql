show databases;
use smn


create table sugestao(
	idmensagem int not null primary key auto_increment,
    mensagem varchar(100),
    idUsuario  varchar(50),
    CONSTRAINT fk_idusuario FOREIGN KEY (idUsuario) REFERENCES usuario (email)
)
show tables
drop table sugestao
insert into sugestao(mensagem) values('va dormir');
select * from sugestao;

create table refeicao(
	idcomida int primary key auto_increment,
    pratoPrincipal varchar(40),
    guarnicao varchar(40),
    salada1 varchar(40),
    salada2 varchar(40),
    sobremesa varchar(40),
    idUsuario  varchar(50),
    CONSTRAINT fk_usuario FOREIGN KEY (idUsuario) REFERENCES usuario (email),
    semana varchar(7),
    check(semana = "segunda" or  semana ="terça" or semana = "quarta"or semana= "quinta" or semana = "sexta")
)
 drop table refeicao
insert into refeicao (idcomida ,pratoPrincipal, guarnicao, salada1, salada2, sobremesa, semana) values(4,'BIFE DE PERNIL ACEBOLADO','SUFLÊ DE CENOURA','FOLHAS','VINAGRETE','FRUTA','terça');
select * from refeicao;

create table usuario(
	email varchar(50) not null primary key,
    nome varchar(50),
    senha varchar(50),
    img varchar(15)
)
insert into usuario (email, nome, senha) values ('gabrielgianotti5@gmail.com', 'gabriel simon', 'gfdfg');

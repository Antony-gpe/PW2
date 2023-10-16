drop database if exists pw2;
create database pw2;
use pw2;

create table administrador
(
	id_administrador	int		not null auto_increment,
	user		varchar(40) 	not null,
    password	varchar(40)		not null,
    
    primary key (id_administrador)
)auto_increment=1;

create table usuario
(
	id_usuario			int			not null auto_increment,
    user				varchar(50) not null,
    password			varchar(50) not null,
    nombre				varchar(100) not null,
    apellido_p			varchar(100) not null,
    apellido_m			varchar(100) not null,
    correo				varchar(100) not null,
    fecha_n				date not null,
    foto				mediumblob,
    
    primary key (id_usuario)
)auto_increment=1;

create table categoria
(
	id_categoria		int not null auto_increment,
    id_administrador_f	int not null,
    nombre				varchar(100),
    descripcion			varchar(600),
    
    primary key(id_categoria)
)auto_increment=1;

create table categoria_ban
(
	id_categoria_ban	int not null auto_increment,
    id_usuario_f			int	not null,
    id_categoria_f		int not null,

	primary key(id_categoria_ban)
)auto_increment=1;

create table publicacion
(
	id_publicacion		int not null auto_increment,
    id_usuario_f		int not null,
    id_categoria_f		int not null,
	texto				varchar(1000) not null,
	fecha_creacion		datetime,#		default(date_format(now(), '%d/%m/%Y - %r')),
    
    primary key(id_publicacion)
)auto_increment=1;

create table recurso
(
	id_recurso			int not null auto_increment,
    id_publicacion_f	int not null,
    imagen				mediumblob not null,
    
    primary key(id_recurso)
)auto_increment=1;

create table comentario
(
	id_comentario		int not null auto_increment,
    id_publicacion_f	int not null,
    id_usuario_f		int not null,
    texto				varchar(1000) not null,
    
    primary key(id_comentario)
)auto_increment=1;

create table siguiendo
(
	id_siguiendo		int not null auto_increment,
    id_usuario_seguido	int not null comment "este usuario es el que es seguido por el otro usuario",
    id_usuario_seguidor	int not null comment "este usuario sigue al otro",
    
    primary key(id_siguiendo)
)auto_increment=1;


alter table categoria 			add constraint fk_categoria_creacion		foreign key(id_administrador_f) 	references administrador(id_administrador);
alter table categoria_ban 		add constraint fk_categoria_ban_usuario		foreign key(id_usuario_f) 		references usuario(id_usuario);
alter table categoria_ban 		add constraint fk_categoria_ban_categoria	foreign key(id_categoria_f) 	references categoria(id_categoria);
alter table publicacion			add constraint fk_publicacion_usuario		foreign key(id_usuario_f) 	references usuario(id_usuario);
alter table publicacion			add constraint fk_publicacion_categoria		foreign key(id_categoria_f) 	references categoria(id_categoria);
alter table recurso				add constraint fk_recurso_publicacion		foreign key(id_publicacion_f) 	references publicacion(id_publicacion);
alter table comentario			add constraint fk_comentario_usuario		foreign key(id_usuario_f) 	references usuario(id_usuario);
alter table comentario			add constraint fk_comentario_publicacion		foreign key(id_publicacion_f) 	references publicacion(id_publicacion);
alter table siguiendo			add constraint fk_siguiendo_seguido		foreign key(id_usuario_seguido) 	references usuario(id_usuario);
alter table siguiendo			add constraint fk_siguiendo_seguidor		foreign key(id_usuario_seguidor) 	references usuario(id_usuario);
#alter table recurso				add constraint fk_recurso_publicacion		foreign key(id_publicacion_f) 	references publicacion(id_publicacion);

##pruebas

select * from usuario;
insert into usuario(user, password, nombre, apellido_p, apellido_m, correo, fecha_n, foto)
values('buny', '1234', 'luis jair', 'ignacio', 'castro', 'luis@gmail.com', now(), '010101010101010101010110011010101010101');



    
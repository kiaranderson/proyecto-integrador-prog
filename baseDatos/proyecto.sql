CREATE SCHEMA `proyecto`;
USE `proyecto`;

CREATE TABLE users(
	id			    INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name	    varchar(20) NOT NULL ,
    nacimiento      DATE NOT NULL ,
    pp 	            TEXT ,
    email 		    VARCHAR(100) NOT NULL ,
	username 	    VARCHAR(20) NOT NULL ,
    pass		    TEXT NOT NULL ,
    createdAt	    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updatedAt		TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products(
	id				INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_name	VARCHAR(100) NOT NULL ,
    image_url		TEXT ,
    description		VARCHAR(500) NOT NULL ,
    createdAt	    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updatedAt		TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    user_id		    INT UNSIGNED,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
	id 			    INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    commentary		VARCHAR(500) NOT NULL ,
    user_id		    INT UNSIGNED NOT NULL ,	
    product_id	    INT UNSIGNED NOT NULL ,
    createdAt	    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updatedAt		TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,

     
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO users(first_name,email,username,pass, nacimiento, pp) VALUES 
('Franco','franco@gmail.com','franco','franco', '2020-04-03', '/images/users/2.jpeg'),
('Martin','martin@hotmail.com','martin','martin', '2020-04-03', '/images/users/download.jpeg'),
('Gloria','gloria@gmail.com','gloria','gloria', '2020-04-03', '/images/users/fotofondoblanco.jpeg'),
('Manuela','manuela@gmail.com','manuela','manuela', '2020-04-03', '/images/users/profilepic.jpeg'),
('Silvia','silvia@gmail.com','silvia','silvia', '2020-04-03', '/images/users/pp.jpeg')
;

INSERT INTO products(product_name,image_url,description,user_id) VALUES 
('Esmeralda Bar','/images/products/esmeralda.jpg','Bar ubicado en recoleta, variedad de comida','1'),
('El Purgatorio','/images/products/purgatorio.jpg','Bar speakeasy en Palermo, divino para un finde','2'),
('Negroni','/images/products/negroni.jpg','Divino para ir en pareja, mas de 12 sucursales','3'),
('Pope','/images/products/pope.jpg','Muy chill con amigos, en Pilar','4'),
('Lowells','/images/products/lowells.jpg','Hamburgueseria y bar, 10 sucursales por Buenos Aires','5'),
('Antares','/images/products/antares.jpg','Cereveza artesanal, sucursales por todo el pais','1'),
('La Calle Bar','/images/products/lacallebar.jpg','Ubicado en el barrio de Palermo','2'),
('Barbas','/images/products/barbas.jpg','Bar ubicado en la ciudad de Pilae','2'),
('Enero Costanera','/images/products/lacallebar.jpg','Bar y restaurante en costanera','4'),
('Blest','/images/products/lacallebar.jpg','Birras artesanal con mas de 10 sucursales','5')
;

INSERT INTO comments(commentary,user_id,product_id) VALUES 
('Divino, me encanto','1','1'),
('Me encanto','2','1'),
('Divino!','3','1'),
('Volvere!','4','1'),
('Divino, me encanto','5','1'),
('Feliz de haber ido','1','2'),
('Birra buenisima','2','2'),
('Comida 10/10','3','2'),
('Siempre buenisimo','4','2'),
('Divino, me encanto','5','2'),
('Muy bueno','1','3'),
('Divino, me encanto','2','3'),
('Volvere!','3','3'),
('Divino, me encanto','4','3'),
('Me encanto','5','3'),
('Divino, me encanto','1','4'),
('Me encanto','2','4'),
('Divino!','3','4'),
('Volvere!','4','4'),
('Divino, me encanto','5','4'),
('Divino, me encanto','1','5'),
('Me encanto','2','5'),
('Divino!','3','5'),
('Volvere!','4','5'),
('Divino, me encanto','5','5'),
('Divino, me encanto','1','6'),
('Me encanto','2','6'),
('Divino!','3','6'),
('Volvere!','4','6'),
('Divino, me encanto','5','6'),
('Divino, me encanto','1','7'),
('Me encanto','2','7'),
('Divino!','3','7'),
('Volvere!','4','7'),
('Divino, me encanto','5','7'),
('Divino, me encanto','1','8'),
('Me encanto','2','8'),
('Divino!','3','8'),
('Volvere!','4','8'),
('Divino, me encanto','5','8'),
('Divino, me encanto','1','9'),
('Me encanto','2','9'),
('Divino!','3','9'),
('Volvere!','4','9'),
('Divino, me encanto','5','9'),
('Divino, me encanto','1','10'),
('Me encanto','2','10'),
('Divino!','3','10'),
('Volvere!','4','10'),
('Divino, me encanto','5','10')
;
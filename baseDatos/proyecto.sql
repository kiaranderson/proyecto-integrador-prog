CREATE SCHEMA `proyecto`;
USE `proyecto`;

CREATE TABLE users(
	id			    INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name	    varchar(20) NOT NULL ,
    nacimiento      DATE NOT NULL ,
    pp 	            TEXT NOT NULL ,
    email 		    VARCHAR(100) NOT NULL ,
	username 	    VARCHAR(20) NOT NULL ,
    pass		    TEXT NOT NULL ,
    createdAt	    TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ,
    updatedAt		TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products(
	id				INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_name	VARCHAR(100) NOT NULL ,
    image_url		TEXT NOT NULL ,
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
     
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

INSERT INTO users(first_name,email,username,pass, nacimiento, pp) VALUES 
('Nicole','brooksnicole98@gmail.com','nikybrooks','amolosbares', '2020-04-03', 'p'),
('Kiara','kanderson@hotmail.com','kikianderson','puchichi21', '2020-04-03', 'p'),
('Facundo','kundotaba@gmail.com','kundotaban','marketingdigital', '2020-04-03', 'p'),
('Guillermo','guillefranchu@gmail.com','franchulli','casadosinhijos', '2020-04-03', 'p'),
('Simba','simle@gmail.com','simbaelrey','mufasa', '2020-04-03', 'p')
;

INSERT INTO products(product_name,image_url,description,user_id) VALUES 
('Esmeralda Bar','/images/esmeralda.jpg','Bar ubicado en recoleta, variedad de comida','1'),
('El Purgatorio','/images/purgatorio.jpg','Bar speakeasy en Palermo, divino para un finde','2'),
('Negroni','/images/negroni.jpg','Divino para ir en pareja, mas de 12 sucursales','3'),
('Pope','/images/pope.jpg','Muy chill con amigos, en Pilar','4'),
('Lowells','/images/lowells.jpg','Hamburgueseria y bar, 10 sucursales por Buenos Aires','5'),
('Antares','/images/antares.jpg','Cereveza artesanal, sucursales por todo el pais','1'),
('La Calle Bar','/images/lacallebar.jpg','Ubicado en el barrio de Palermo','2'),
('Barbas','/images/barbas.jpg','Bar ubicado en la ciudad de Pilae','2'),
('Enero Costanera','/images/lacallebar.jpg','Bar y restaurante en costanera','4'),
('Blest','/images/lacallebar.jpg','Birras artesanal con mas de 10 sucursales','5')
;

INSERT INTO comments(commentary,user_id,product_id) VALUES 
('Divino, me encanto','1','21'),
('Me encanto','2','21'),
('Divino!','3','22'),
('Volvere!','4','23'),
('Divino, me encanto','5','23'),
('Feliz de haber ido','1','24'),
('Super recomendable','1','23'),
('Birra buenisima','2','25'),
('Comida 10/10','3','25'),
('Siempre buenisimo','4','26'),
('Divino, me encanto','5','26'),
('Muy bueno','1','28'),
('Divino, me encanto','1','29'),
('Volvere!','3','30')
;
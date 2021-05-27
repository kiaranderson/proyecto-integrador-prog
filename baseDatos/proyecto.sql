CREATE SCHEMA `proyecto`;
USE `proyecto`;

CREATE TABLE users(
	id			INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name	varchar(20) ,
    surname 	varchar(20) ,
    email 		varchar(100) ,
	username 	varchar(20) ,
    pass		varchar(20) 
    
);

CREATE TABLE products(
	id				INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_name	varchar(100) ,
    image_url		text ,
    description		varchar(500) ,
    create_dat	    date,
    update_dat		date ,
    user_id		    INT UNSIGNED,
    
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
	 id 			INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
     commentary		varchar(500),
     user_id		INT UNSIGNED ,	
     products_id	INT UNSIGNED ,
     
     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
     FOREIGN KEY (products_id) REFERENCES products(id) ON DELETE CASCADE
     
     );

INSERT INTO users(first_name,surname,email,username,pass) VALUES 
('Nicole','Brooks','brooksnicole98@gmail.com','nikybrooks','amolosbares'),
('Kiara','Anderson','kanderson@hotmail.com','kikianderson','puchichi21'),
('Facundo','Tabanera','kundotaba@gmail.com','kundotaban','marketingdigital'),
('Guillermo','Francella','guillefranchu@gmail.com','franchulli','casadosinhijos'),
('Simba','Leon','simle@gmail.com','simbaelrey','mufasa')
;

INSERT INTO products(product_name,image_url,description,create_dat,update_dat,user_id) VALUES 
('Esmeralda Bar','/images/esmeralda.jpg','Bar ubicado en recoleta, variedad de comida','2020-04-03','2020-04-03','1'),
('El Purgatorio','/images/purgatorio.jpg','Bar speakeasy en Palermo, divino para un finde','2020-04-03','2020-04-03','2'),
('Negroni','/images/negroni.jpg','Divino para ir en pareja, mas de 12 sucursales','2020-04-03','2020-04-03','3'),
('Pope','/images/pope.jpg','Muy chill con amigos, en Pilar','2020-04-03','2020-04-03','4'),
('Lowells','/images/lowells.jpg','Hamburgueseria y bar, 10 sucursales por Buenos Aires','2020-04-03','2020-04-03','5'),
('Antares','/images/antares.jpg','Cereveza artesanal, sucursales por todo el pais','2020-04-03','2020-04-03','1'),
('La Calle Bar','/images/lacallebar.jpg','Ubicado en el barrio de Palermo','2020-04-03','2020-04-03','2'),
('Barbas','/images/barbas.jpg','Bar ubicado en la ciudad de Pilae','2020-04-03','2020-04-03','2'),
('Enero Costanera','/images/lacallebar.jpg','Bar y restaurante en costanera','2020-04-03','2020-04-03','4'),
('Blest','/images/lacallebar.jpg','Birras artesanal con mas de 10 sucursales','2020-04-03','2020-04-03','5')
;

INSERT INTO comments(commentary,user_id,products_id) VALUES 
('Divino, me encanto','1','3'),
('Me encanto','2','5'),
('Divino!','3','4'),
('Volvere!','4','7'),
('Divino, me encanto','5','9'),
('Feliz de haber ido','1','10'),
('Super recomendable','1','7'),
('Birra buenisima','2','8'),
('Comida 10/10','3','8'),
('Siempre buenisimo','4','3'),
('Divino, me encanto','5','3'),
('Muy bueno','1','3'),
('Divino, me encanto','1','6'),
('Volvere!','3','9')
;



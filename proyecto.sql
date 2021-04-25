CREATE SCHEMA `proyecto`;
USE `proyecto`;

CREATE TABLE users(
	id			INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    first_name	varchar(20) NOT NULL,
    surname 	varchar(20) NOT NULL,
    email 		varchar(100) NOT NULL,
	username 	varchar(20) NOT NULL,
    pass		varchar(20) NOT NULL,
    products	INT UNSIGNED,
    followers	INT UNSIGNED,
    comments  	INT UNSIGNED
);

CREATE TABLE products(
	id				INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	product_name	varchar(100) NOT NULL,
    image_url		text NOT NULL,
    description		varchar(500) NOT NULL,
    creation_date	datetime NOT NULL DEFAULT now(),
    user_id		INT UNSIGNED NOT NULL,
    comments		INT UNSIGNED,
    
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE comments (
	 commentary		varchar(500),
     creation_date	datetime NOT NULL DEFAULT now(),
     user_id		INT UNSIGNED NOT NULL,	
     products_id	INT UNSIGNED NOT NULL,
     
     FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
     FOREIGN KEY (products_id) REFERENCES products(id) ON DELETE CASCADE
     
     );

INSERT INTO users(first_name,surname,email,username,pass,products, followers,comments) VALUES 
('Nicole','Brooks','brooksnicole98@gmail.com','nikybrooks','amolosbares','27','346','125'),
('Kiara','Anderson','kanderson@hotmail.com','kikianderson','puchichi21','3','105','23'),
('Facundo','Tabanera','kundotaba@gmail.com','kundotaban','marketingdigital','76','567','300'),
('Guillermo','Francella','guillefranchu@gmail.com','franchulli','casadosinhijos','9','30','13'),
('Simba','Leon','simle@gmail.com','simbaelrey','mufasa','1020','767','458')
;

INSERT INTO products(product_name,image_url,description,creation_date,user_id,comments) VALUES 
('Esmeralda Bar','img_18473','Bar ubicado en recoleta, variedad de comida','2020-04-03','1','6'),
('El Purgatorio','img_38383','Bar speakeasy en Palermo, divino para un finde','2020-04-03','2','20'),
('Negroni','img_48382','Divino para ir en pareja, mas de 12 sucursales','2020-04-03','3','78'),
('Pope','img_33933','Muy chill con amigos, en Pilar','2020-04-03','4','3'),
('Lowells','img_22833','Hamburgueseria y bar, 10 sucursales por Buenos Aires','2020-04-03','5','7'),
('Antares','img_18338','Cereveza artesanal, sucursales por todo el pais','2020-04-03','1','392'),
('La Calle Bar','img_67381','Ubicado en el barrio de Palermo','2020-04-03','2','90'),
('Barbas','img_59493','Bar ubicado en la ciudad de Pilae','2020-04-03','12','3'),
('Enero Costanera','img_23383','Bar y restaurante en costanera','2020-04-03','4','9'),
('Blest','img_98383','Birras artesanal con mas de 10 sucursales','2020-04-03','5','24')
;

INSERT INTO comments(commentary,user_id,products_id) VALUES 
('Divino, me encanto','1','21'),
('Me encanto','2','21'),
('Divino!','3','21'),
('Volvere!','4','21'),
('Divino, me encanto','5','21'),
('Feliz de haber ido','1','22'),
('Super recomendable','1','22'),
('Birra buenisima','2','22'),
('Comida 10/10','3','22'),
('Siempre buenisimo','4','22'),
('Divino, me encanto','5','23'),
('Muy bueno','1','23'),
('Divino, me encanto','1','23'),
('Volvere!','3','23'),
('Divino, me encanto','2','23'),
('Volvere!','5','24'),
('Muy bueno','5','24'),
('Divino, me encanto','4','24'),
('Volvere!','3','24'),
('Divino, me encanto','3','24'),
('Feliz de haber ido','2','25'),
('Divino, me encanto','1','25'),
('Muy bueno','3','25'),
('Divino, me encanto','5','25'),
('Comida 10/10','5','25'),
('Divino, me encanto','4','25'),
('Super recomendable','4','26'),
('Divino, me encanto','4','26'),
('Comida 10/10','3','26'),
('Divino, me encanto','3','26'),
('Volvere!','3','26'),
('Comida 10/10','5','26'),
('Divino, me encanto','3','27'),
('Feliz de haber ido','3','27'),
('Divino, me encanto','4','27'),
('Muy bueno','2','27'),
('Divino, me encanto','5','28'),
('Super recomendable','4','28'),
('Divino, me encanto','2','29'),
('Muy bueno','1','29'),
('Divino, me encanto','1','30')
;

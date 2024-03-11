CREATE DATABASE IF NOT EXISTS artsdrops ;

USE artsdrops;

CREATE TABLE Artist(
    artist_id   char(5)         PRIMARY KEY,
    name        varchar(100)    NOT NULL,
    amount_sold int,
    DOB         date
);

CREATE TABLE Art(
    art_id      char(5)         PRIMARY KEY,
	name        varchar(40)     NOT NULL,
    type        varchar(20),
    price       double          NOT NULL,
    descript    varchar(100),
    picture     varchar(100)    NOT NULL,
    artist_id   char(5),
    CONSTRAINT fk_art FOREIGN KEY(artist_id)
    REFERENCES Artist(artist_id)
);

CREATE TABLE Payment(
    payment_id  char(5)         PRIMARY KEY,
    address     varchar(100)    NOT NULL,
    type        int             NOT NULL,
    totalprice  decimal(10,2)   NOT NULL
);


INSERT INTO art(name,type,price,id,descript,picture)
VALUES
('Fancy Sky','Digital Art',2000.00,1,'Fancy sky and city digital art','https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg'),
('PalaceLearning','Painting',8000.00,2,'PalaceLearning Cafe Terrace at Night Poster by Vincent Van Gogh - 1881 - Fine Art Print - The Cafe Terrace on The Place du Forum','https://i.pinimg.com/564x/3c/c7/af/3cc7af43775361a90a5c13ab2422ea9b.jpg'),
('Matisse','Painting',1800.00,3,'Why Was Matisse Obsessed with Goldfish?','https://i.pinimg.com/564x/43/4c/dc/434cdcac98e36e57e15048b9e0eadfb4.jpg'),
('Pin','Painting','4250.00',3,'Pin by Eve Ringers on Portrait | Art prints boho, Abstract art painting, Art inspiration painting','https://i.pinimg.com/564x/48/1f/a7/481fa74f181e64cf8578ea1b54c97076.jpg');



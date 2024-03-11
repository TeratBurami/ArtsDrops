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

COMMIT;
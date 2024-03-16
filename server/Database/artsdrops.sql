DROP DATABASE IF EXISTS artsdrops;

CREATE DATABASE IF NOT EXISTS artsdrops ;

USE artsdrops;

CREATE TABLE Artist(
    artist_id   char(5)         PRIMARY KEY,
    artist_name varchar(100)    NOT NULL,
    pics		varchar(200) 	NOT NULL,
    descrip		varchar(200),
    amount_sold int,
    DOB         date
);

CREATE TABLE Art(
    art_id      char(5)         PRIMARY KEY,
	art_name    varchar(40)     NOT NULL,
    type       varchar(20),
    price       decimal(10,2)   NOT NULL,
    descript    varchar(100),
    picture     varchar(100)    NOT NULL,
    artist_id   char(5),
    CONSTRAINT fk_art FOREIGN KEY(artist_id)
    REFERENCES Artist(artist_id)
);

CREATE TABLE Payment(
    payment_id  char(5)         PRIMARY KEY,
    s_address   varchar(100)    NOT NULL,
    ptype       int             NOT NULL,
    totalprice  decimal(10,2)   NOT NULL
);

CREATE TABLE LoginSystem(
    login_id    char(5)         PRIMARY KEY,
    username    varchar(100)    NOT NULL,
    password    varchar(100)    NOT NULL
);

CREATE TABLE Account(
    account_id  char(5)         PRIMARY KEY,
    username    varchar(100)    NOT NULL,
    password    varchar(100)    NOT NULL
);

CREATE TABLE User(
    account_id  char(5)         PRIMARY KEY,
    username    varchar(100)    NOT NULL,
    password    varchar(100)    NOT NULL,
    email       varchar(30),
    DOB         date,
    phone_no    char(10),
    CONSTRAINT  fk_user     FOREIGN KEY (account_id)
    REFERENCES  Account(account_id)
);

CREATE TABLE Admin(
    account_id  char(5)         PRIMARY KEY,
    Rolee       int,
    CONSTRAINT  fk_admin    FOREIGN KEY (account_id)
    REFERENCES 	Account(account_id)
);

CREATE TABLE Input(
    login_id    char(5)         NOT NULL,
    account_id  char(5)         NOT NULL,
    _date       date,
    CONSTRAINT  fk_inlog    FOREIGN KEY (login_id)
    REFERENCES  LoginSystem(login_id),
    CONSTRAINT  fk_inac     FOREIGN KEY (account_id)
    REFERENCES  Account(Account_id)            
);

CREATE TABLE Manage(
    admin_id    char(5)         NOT NULL,
    account_id  char(5)         NOT NULL,
    CONSTRAINT  fk_admanage    FOREIGN KEY (admin_id) 
    REFERENCES  Admin(account_id),
    CONSTRAINT  fk_accmanage  FOREIGN KEY (account_id)
    REFERENCES  Account(account_id)
);

CREATE TABLE Edit(
    admin_id    char(5)         NOT NULL,
    prod_id     char(5)         NOT NULL,
    CONSTRAINT  fk_adminE    FOREIGN KEY (admin_id)
    REFERENCES  Admin(account_id),
    CONSTRAINT  fk_prodE     FOREIGN KEY (prod_id)
    REFERENCES  Art(art_id)
);

CREATE TABLE Buy(
    account_id  char(5)         NOT NULL,
    art_id      char(5)         NOT NULL,
    paid_id     char(5)         NOT NULL,
    CONSTRAINT  fk_accbuy      FOREIGN KEY (account_id)
    REFERENCES  Account(account_id),
    CONSTRAINT  fk_artbuy      FOREIGN KEY (art_id)
    REFERENCES  Art(art_id),
    CONSTRAINT  fk_paybuy      FOREIGN KEY (paid_id)
    REFERENCES  Payment(payment_id)
);

COMMIT;
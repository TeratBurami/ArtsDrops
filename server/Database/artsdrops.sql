CREATE DATABASE IF NOT EXISTS artsdrops ;

USE artsdrops;

CREATE TABLE Artist(
    artist_id   char(5)         PRIMARY KEY,
    artist_name varchar(100)    NOT NULL,
    amount_sold int,
    DOB         date
);

CREATE TABLE Art(
    art_id      char(5)         PRIMARY KEY,
	art_name    varchar(40)     NOT NULL,
    atype       varchar(20),
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

-- CREATE TABLE Input(
--     login_id    char(5)         NOT NULL,
--     account_id  char(5)         NOT NULL,
--     _date       date
--     CONSTRAINT  pk_input    PRIMARY KEY (login_id, account_id),
--     CONSTRAINT  fk_inlog    FOREIGN KEY (login_id)
--     REFERENCES  LoginSystem(login_id),
--     CONSTRAINT  fk_inac     FOREIGN KEY (account_id)
--     REFERENCES  Account(account_id)            
-- );

CREATE TABLE User(
    account_id  char(5)         PRIMARY KEY,
    username    varchar(100)    NOT NULL,
    password    varchar(100)    NOT NULL,
    email       varchar(30),
    DOB         date,
    phone_no    char(10)
);

CREATE TABLE Admin(
    account_id  char(5)         PRIMARY KEY,
    Rolee       int,
    CONSTRAINT  fk_admin    FOREIGN KEY (account_id)
    REFERENCES Account(account_id)
);

CREATE TABLE Manage(
    admin_id    char(5)         NOT NULL,
    account_id  char(5)         NOT NULL,
    CONSTRAINT  pk_manage   PRIMARY KEY (admin_id, account_id),
    CONSTRAINT  admin_id    FOREIGN KEY (admin_id) 
    REFERENCES  Admin(account_id),
    CONSTRAINT  account_id  FOREIGN KEY (account_id)
    REFERENCES  Account(account_id)
);

-- CREATE TABLE Edit(
--     admin_id    char(5)         NOT NULL,
--     prod_id     char(5)         NOT NULL,
--     CONSTRAINT  pk_Edit     PRIMARY KEY (admin_id, prod_id),
--     CONSTRAINT  fk_admin    FOREIGN KEY (admin_id)
--     REFERENCES  Admin(account_id),
--     CONSTRAINT  fk_prod     FOREIGN KEY (prod_id)
--     REFERENCES  Art(art_id)
-- );

-- CREATE TABLE Buy(
--     account_id  char(5)         NOT NULL,
--     art_id      char(5)         NOT NULL,
--     paid_id     char(5)         NOT NULL,
--     CONSTRAINT  pk_buy      PRIMARY KEY (account_id, art_id, paid_id),
--     CONSTRAINT  fk_acc      FOREIGN KEY (account_id)
--     REFERENCES  Account(account_id),
--     CONSTRAINT  fk_art      FOREIGN KEY (art_id)
--     REFERENCES  Art(art_id),
--     CONSTRAINT  fk_pay      FOREIGN KEY (paid_id)
--     REFERENCES  Payment(payment_id)
-- )

INSERT INTO Artist VALUES
('AT001', 'Leonardo Darvinci', 10, '1897-02-05'),
('AT002', 'Vangough', 101, '1903-09-22'),
('AT003', 'Suspicious person', 0, '2024-1-1');


INSERT INTO Art VALUES
('AR001', 'Fancy Sky', 'Digital Art', 2000.00, 'Fancy sky and city digital art', 'https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg', 'AT003'),
('AR002', 'PalaceLearning', 'Painting', 8000.00, 'PalaceLearning Cafe Terrace at Night Poster by Vincent Van Gogh - 1881 - Fine Art Print - The Cafe Terrace on The Place du Forum','https://i.pinimg.com/564x/3c/c7/af/3cc7af43775361a90a5c13ab2422ea9b.jpg', 'AT003'),
('AR003', 'Matisse','Painting',1800.00, 'Why Was Matisse Obsessed with Goldfish?','https://i.pinimg.com/564x/43/4c/dc/434cdcac98e36e57e15048b9e0eadfb4.jpg', 'AT001'),
('AR004', 'Pin','Painting',4250.00, 'Pin by Eve Ringers on Portrait | Art prints boho, Abstract art painting, Art inspiration painting','https://i.pinimg.com/564x/48/1f/a7/481fa74f181e64cf8578ea1b54c97076.jpg', 'AT003');

COMMIT;
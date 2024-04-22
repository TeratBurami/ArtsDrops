DROP DATABASE IF EXISTS artsdrops;

CREATE DATABASE IF NOT EXISTS artsdrops ;

USE artsdrops;

-- use
CREATE TABLE Artist(
    artist_id   char(5)         PRIMARY KEY,
    artist_name varchar(100)    NOT NULL,
    pics		varchar(200) 	NOT NULL,
    descrip		varchar(200),
    amount_sold int,
    DOB         date
);

-- use
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

CREATE TABLE Account(
    account_id  char(5)         PRIMARY KEY,
    username    varchar(100)    NOT NULL,
    password    varchar(100)    NOT NULL,
    email       varchar(30),
    DOB         date,
    phone_no    char(10),
    user_role       int
);


CREATE TABLE Buy(
    account_id  char(5)         NOT NULL,
    art_id      char(5)         NOT NULL,
    paid_id  char(5)         	NOT NULL,
    s_address   varchar(100)    ,
    CONSTRAINT  fk_accbuy      FOREIGN KEY (account_id)
    REFERENCES  Account(account_id),
    CONSTRAINT  fk_artbuy      FOREIGN KEY (art_id)
    REFERENCES  Art(art_id)
);

-- COPY THIS TO ARTDROPS WHEN YOU GONNA CHECK
USE artsdrops;

INSERT INTO Artist (artist_id, artist_name, pics, descrip, amount_sold, DOB)
VALUES
('AT001', 'Leonardo da Vinci', 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg', 'Renaissance polymath', 100, '1452-04-15'),
('AT002', 'Vincent van Gogh', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg', 'Post-Impressionist painter', 150, '1853-03-30'),
('AT003', 'Pablo Picasso', 'https://cdn.britannica.com/52/134252-050-645431E5/Pablo-Picasso-1950.jpg', 'Cubist pioneer', 200, '1881-10-25'),
('AT004', 'Super Cool Mozart', 'https://www.sandiegosymphony.org/media/uploads/blog/cool-mozart.jpg', 'Mozartza007', 220, '1756-05-08'),
('AT005', 'Michelangelo Buonarroti', 'https://cdn.britannica.com/46/75046-050-0973B0E8/Michelangelo.jpg', 'High Renaissance sculptor', 180, '1475-03-06'),
('AT006', 'Albert Einstein', 'https://www.singulart.com/blog/wp-content/uploads/2023/10/Albert-Einstein-1948-1-992x1024.jpg', 'Normal person with the curly hair', 20, '1880-04-16'),
('AT007', 'Wright brothers', 'https://cdn.britannica.com/10/69210-050-33BA2D24/Orville-Wright-1910.jpg', 'Wright brothers', 180, '1885-12-11'),
('AT008', 'Rembrandt van Rijn', 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Rembrant_Self-Portrait%2C_1660.jpg', 'The best world artist', 103, '1756-05-08'),
('AT009', 'Henri Matisse', 'https://hips.hearstapps.com/hmg-prod/images/gettyimages-517318552.jpg', 'Fauvist style is mine', 650, '1985-02-02'),
('AT010', 'Super cool Beethoven', 'https://elsewhere.scdn3.secure.raxcdn.com/images/v95000/articles/beethoven.jpg','BeethovenInwza007', 16, '1425-02-06'); 


INSERT INTO Art VALUES

('AR001', 'Fancy Sky', 'Digital Art', 2000.00, 'Fancy sky and city digital art', 
    'https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg', 'AT003'),

('AR002', 'PalaceLearning', 'Painting', 8000.00, 'PalaceLearning Cafe Terrace at Night Poster by Vincent Van Gogh - 1881 - Fine Art Print - The Cafe Terrace on The Place du Forum',
    'https://i.pinimg.com/564x/3c/c7/af/3cc7af43775361a90a5c13ab2422ea9b.jpg', 'AT003'),

('AR003', 'Matisse','Painting',1800.00, 'Why Was Matisse Obsessed with Goldfish?',
    'https://i.pinimg.com/564x/43/4c/dc/434cdcac98e36e57e15048b9e0eadfb4.jpg', 'AT001'),

('AR004', 'Pin','Painting',4250.00, 'Pin by Eve Ringers on Portrait | Art prints boho, Abstract art painting, Art inspiration painting',
    'https://i.pinimg.com/564x/48/1f/a7/481fa74f181e64cf8578ea1b54c97076.jpg', 'AT003'),

('AR005', 'Pino Jelly', 'Art toy', 375.00, 'Pino Jelly How Are You Feeling Today Series', 
    'https://i.pinimg.com/564x/d4/17/fe/d417fe3f2f658307031c1fcac0bb9f19.jpg','AT002'),

('AR006', 'Space Molly', 'Art toy', 390.00, 'MEGA SPACE MOLLY GLACIER',
    'https://i.pinimg.com/564x/d5/e4/32/d5e4322bf75d1f15b0f9a7719a51904e.jpg', 'AT002'),

('AR007', 'SKULLPAND', 'Art toy', 380.00, 'SKULLPANDA City of Night Series', 
    'https://i.pinimg.com/564x/ba/6b/67/ba6b67228dca1899df2a105f627a0e40.jpg', 'AT002'),

('AR008', 'Hirono', 'Art toy', 452.00, 'Hirono City of Mercy Series',
    'https://i.pinimg.com/564x/9b/0d/66/9b0d66747c22e14c071645fdfce07775.jpg', 'AT002'),
    
('AR009', 'Dimoo', 'Art toy', 275.00, 'Dimoo Jurassic World Series',
    'https://i.pinimg.com/564x/61/f7/1d/61f71dff2f1f871f466fb6ca9eb89c45.jpg', 'AT002'),

('AR010', 'Labubu', 'Art toy', 890.00, 'Embrace the Magic of Imagination with Our Labubu Dress-Up Latte Doll',
    'https://i.pinimg.com/564x/cd/66/11/cd6611ce68b0c571bfcbbf27a73202be.jpg', 'AT002'),
    
('AR011', 'CryptoKitty', 'NFTs', 54000.00, 'Meow Meow Meow Meow Meow Meow Meow',
	'https://www.finmag.fr/wp-content/uploads/2022/06/copy-of-fr-nfts-guide-for-finmag-3.png','AT002'),
    
('AR012', 'Home Sweet Home', 'Design', 240.00, 'A beautiful design for house',
	'https://i.pinimg.com/736x/e6/bf/8b/e6bf8b2e45015001c02ced0cbb9ecb27.jpg', 'AT003'),
    
('AR013', 'T I M E', 'Photography', 999.00, 'Time is money said the one who dont have time',
	'https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb', 'AT003'),
    
('AR014', 'Goonies', 'Prints', 2012.00, 'Smile :>',
	'https://i.pinimg.com/550x/47/7b/ed/477bed857869a6b15586819f8e817e53.jpg', 'AT003'),
    
('AR015', 'DSTR', 'Graffiti', 250.00, 'Deeeeeee Aceeeee Teeee Roarrrrr',
	'https://i.pinimg.com/736x/5a/2f/dd/5a2fdd1ba0826ae1e6df5c618f8b84b8.jpg', 'AT004'),

('AR016', 'Mr.4', 'Drawing', 444.44, 'Live has no meaning but ur death shall',
	'https://pbs.twimg.com/media/EfY98j3WsAAgI6x.png', 'AT005');

-- admin password: GGEZDB
-- user password: GGUSER
INSERT INTO Account (account_id, username, password,email, DOB, phone_no,user_role)
VALUES

('U0001', 'admin', '$2b$10$MS/aIpetLLuxSNc7tLUnzuXMU4fThrRGqFj95OgnPBin1pkfsxUyS', 'admin@gmail.com', '2004-02-14', '0899899989', 0),
('U0002', 'beam', '$2b$10$LlxJlT1TXxkMmlOjraepveF/XAPhBiIEScUfKOnoiNwufwvWoZTiu', 'beamterat@gmail.com', '2012-01-01', '0888888888',0),
('U0003', 'callmecplusplus', '$2b$10$.aigTMUpsZ2kcuLAny8VqOVuSW9zfxw1vM/9aMhq5PfggA1xB2PZK', 'nithithit@gmail.com', '2024-03-21', '0877877787',1),
('U0004', 'guythebully', '$2b$10$FurqXbZrrH72pZFvb5ynzOx/08kogzNujhfSgrJv74Zhv.pOyfsZ2', 'bullybully@gmail.com', '1970-03-03', '0845623458',2),
('U0005', 'sandy', '$2b$10$u9O63MYkS4KP/jYflXn8ZOHsxbTCbP/CmDnwTqoX4tiQkH24g2fH.', 'callmesandy@example.com', '2004-02-14', '0644589885',1),
('U0006', 'athichanoui', '$2b$10$Xnr5Frf/ZJLIN/f470Ju0uBvYEXJ/su5Qk8U/LBVL9VE7A4W/v5EW', 'noinoi@example.com', '1950-03-03', '0877564589',2),
('U0007', 'user', '$2b$10$uHJ9v3ZxJpakYkbwm0F3hev2agPkvHTzabwKuOmbcCEs3gxJ16lb6', 'user@gmail.com', '1990-03-03', '0644566545',2),
('U0008', 'whoami', '$2b$10$uHJ9v3ZxJpakYkbwm0F3hev2agPkvHTzabwKuOmbcCEs3gxJ16lb6', 'whoami@example.com', '2000-03-03', '0632569876',2),
('U0009', 'miamwho', '$2b$10$uHJ9v3ZxJpakYkbwm0F3hev2agPkvHTzabwKuOmbcCEs3gxJ16lb6', 'iamwho@example.com', '1950-03-03', '0831235885',2),
('U0010', 'uwuuwu', '$2b$10$uHJ9v3ZxJpakYkbwm0F3hev2agPkvHTzabwKuOmbcCEs3gxJ16lb6', 'uwu@example.com', '1990-03-03', '0977766754',1);



INSERT INTO Buy (account_id, art_id, paid_id, s_address)
VALUES
('U0001', 'AR001', 'P001', 'Mahidol University'),
('U0001', 'AR002', 'P002', '180/3 Nakhon Pathom Muang Muang'),
('U0003', 'AR003', 'P003', '-'),
('U0004', 'AR004', 'P004', 'Mahidol University'),
('U0006', 'AR005', 'P005', '103 str.kaosans'),
('U0006', 'AR009', 'P006', '-'),
('U0006', 'AR008', 'P007', 'POPMART'),
('U0001', 'AR010', 'P008', 'POPMART'),
('U0005', 'AR010', 'P009','POPMART'),
('U0002', 'AR010', 'P010','POPMART');


COMMIT;

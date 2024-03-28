-- COPY THIS TO ARTDROPS WHEN YOU GONNA CHECK
USE artsdrops;

INSERT INTO Artist (artist_id, artist_name, pics, descrip, amount_sold, DOB)
VALUES
('AT001', 'Leonardo da Vinci', 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg', 'Renaissance polymath', 100, '1452-04-15'),
('AT002', 'Vincent van Gogh', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg', 'Post-Impressionist painter', 150, '1853-03-30'),
('AT003', 'Pablo Picasso', 'https://cdn.britannica.com/52/134252-050-645431E5/Pablo-Picasso-1950.jpg', 'Cubist pioneer', 200, '1881-10-25'),
('AT004', 'Claude Monet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cZIWPbra92KfnvC3kZUkE7w8HlD8QjJEYv-8XvWO&s', 'Impressionist master', 120, '1840-11-14'),
('AT005', 'Michelangelo Buonarroti', 'https://cdn.britannica.com/46/75046-050-0973B0E8/Michelangelo.jpg', 'High Renaissance sculptor', 180, '1475-03-06');


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
    'https://i.pinimg.com/564x/cd/66/11/cd6611ce68b0c571bfcbbf27a73202be.jpg', 'AT002');
    
-- FIXED PAYMENT ATTRIBUTES
INSERT INTO Payment (payment_id, s_address, ptype, totalprice)
VALUES
('P001', '123 Main St, City', 1, 500.00),
('P002', '456 Elm St, Town', 2, 1200.00),
('P003', '789 Oak St, Village', 1, 200.00),
('P004', '321 Pine St, Hamlet', 2, 300.00),
('P005', '654 Maple St, Countryside', 1, 150.00);

INSERT INTO LoginSystem (login_id, username, password)
VALUES
('L0001', 'user1', 'password1'),
('L0002', 'user2', 'password2'),
('L0003', 'user3', 'password3'),
('L0004', 'user4', 'password4'),
('L0005', 'user5', 'password5');


INSERT INTO Account (account_id, username, password,email, DOB, phone_no,user_role)
VALUES
('U0001', 'user1', 'password1', 'user1@example.com', '1990-01-01', '1234567890',0),
('U0002', 'user2', 'password2', 'user2@example.com', '1985-02-02', '2345678901',1),
('U0003', 'user3', 'password3', 'user3@example.com', '1990-03-03', '3456789012',1),
('U0004', 'user4', 'password4', 'user4@example.com', '2000-03-03', '4567891011',2),
('U0005', 'user5', 'password5', 'user5@example.com', '1950-03-03', '5678910123',2);


-- INSERT INTO User (account_id, email, DOB, phone_no)
-- VALUES
-- ('U0001', 'user1@example.com', '1990-01-01', '1234567890'),
-- ('U0002', 'user2@example.com', '1985-02-02', '2345678901'),
-- ('U0003', 'user3@example.com', '1980-03-03', '3456789012');



-- INSERT INTO Admin (account_id, user_role)
-- VALUES
-- ('U0004', 2),
-- ('U0005', 1);


INSERT INTO Input (login_id, account_id, _date)
VALUES
('L0001', 'U0001', '2024-03-15'),
('L0002', 'U0002', '2024-03-15'),
('L0003', 'U0003', '2024-03-15'),
('L0004', 'U0004', '2024-03-15'),
('L0005', 'U0005', '2024-03-15');


-- INSERT INTO Manage (admin_id, account_id)
-- VALUES
-- ('U0004', 'U0001'),
-- ('U0004', 'U0002'),
-- ('U0004', 'U0003'),
-- ('U0004', 'U0004'),
-- ('U0005', 'U0005');


-- INSERT INTO Edit (admin_id, prod_id)
-- VALUES
-- ('U0005', 'AR001'),
-- ('U0005', 'AR002'),
-- ('U0005', 'AR001'),
-- ('U0005', 'AR004'),
-- ('U0005', 'AR001');


INSERT INTO Buy (account_id, art_id, paid_id)
VALUES
('U0001', 'AR001', 'P001'),
('U0001', 'AR002', 'P002'),
('U0003', 'AR003', 'P003');


COMMIT;
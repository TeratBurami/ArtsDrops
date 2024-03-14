-- COPY THIS TO ARTDROPS WHEN YOU GONNA CHECK

USE artsdrops;

INSERT INTO Artist (artist_id, artist_name, pics, descrip, amount_sold, DOB)
VALUES
('A0001', 'Leonardo da Vinci', 'https://hips.hearstapps.com/hmg-prod/images/portrait-of-leonardo-da-vinci-1452-1519-getty.jpg', 'Renaissance polymath', 100, '1452-04-15'),
('A0002', 'Vincent van Gogh', 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project.jpg', 'Post-Impressionist painter', 150, '1853-03-30'),
('A0003', 'Pablo Picasso', 'https://cdn.britannica.com/52/134252-050-645431E5/Pablo-Picasso-1950.jpg', 'Cubist pioneer', 200, '1881-10-25'),
('A0004', 'Claude Monet', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-cZIWPbra92KfnvC3kZUkE7w8HlD8QjJEYv-8XvWO&s', 'Impressionist master', 120, '1840-11-14'),
('A0005', 'Michelangelo Buonarroti', 'https://cdn.britannica.com/46/75046-050-0973B0E8/Michelangelo.jpg', 'High Renaissance sculptor', 180, '1475-03-06');


INSERT INTO Art VALUES

('AR001', 'Fancy Sky', 'Digital Art', 2000.00, 1, 'Fancy sky and city digital art', 
    'https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg', 'AT003'),

('AR002', 'PalaceLearning', 'Painting', 8000.00, 2, 'PalaceLearning Cafe Terrace at Night Poster by Vincent Van Gogh - 1881 - Fine Art Print - The Cafe Terrace on The Place du Forum',
    'https://i.pinimg.com/564x/3c/c7/af/3cc7af43775361a90a5c13ab2422ea9b.jpg', 'AT003'),

('AR003', 'Matisse','Painting',1800.00,3,'Why Was Matisse Obsessed with Goldfish?',
    'https://i.pinimg.com/564x/43/4c/dc/434cdcac98e36e57e15048b9e0eadfb4.jpg', 'AT001'),

('AR004', 'Pin','Painting',4250.00,3,'Pin by Eve Ringers on Portrait | Art prints boho, Abstract art painting, Art inspiration painting',
    'https://i.pinimg.com/564x/48/1f/a7/481fa74f181e64cf8578ea1b54c97076.jpg', 'AT003');


INSERT INTO LoginSystem (login_id, username, password)
VALUES
('L0001', 'user1', 'password1'),
('L0002', 'user2', 'password2'),
('L0003', 'user3', 'password3'),
('L0004', 'user4', 'password4'),
('L0005', 'user5', 'password5');


INSERT INTO Account (account_id, username, password)
VALUES
('U0001', 'user1', 'password1'),
('U0002', 'user2', 'password2'),
('U0003', 'user3', 'password3'),
('U0004', 'user4', 'password4'),
('U0005', 'user5', 'password5');


INSERT INTO User (account_id, email, DOB, phone_no)
VALUES
('U0001', 'user1@example.com', '1990-01-01', '1234567890'),
('U0002', 'user2@example.com', '1985-02-02', '2345678901'),
('U0003', 'user3@example.com', '1980-03-03', '3456789012'),
('U0004', 'user4@example.com', '1975-04-04', '4567890123'),
('U0005', 'user5@example.com', '1970-05-05', '5678901234');


INSERT INTO Admin (account_id, Rolee)
VALUES
('A0001', 1),
('A0002', 2),
('A0003', 1),
('A0004', 2),
('A0005', 1);


INSERT INTO Input (login_id, account_id, _date)
VALUES
('L0001', 'U0001', '2024-03-15'),
('L0002', 'U0002', '2024-03-15'),
('L0003', 'U0003', '2024-03-15'),
('L0004', 'U0004', '2024-03-15'),
('L0005', 'U0005', '2024-03-15');


INSERT INTO Manage (admin_id, account_id)
VALUES
('A0001', 'U0001'),
('A0002', 'U0002'),
('A0003', 'U0003'),
('A0004', 'U0004'),
('A0005', 'U0005');


INSERT INTO Edit (admin_id, prod_id)
VALUES
('A0001', 'AR001'),
('A0002', 'AR002'),
('A0003', 'AR003'),
('A0004', 'AR004'),
('A0005', 'AR005');


INSERT INTO Buy (account_id, art_id, paid_id)
VALUES
('U0001', 'AR001', 'P001'),
('U0002', 'AR002', 'P002'),
('U0003', 'AR003', 'P003'),
('U0004', 'AR004', 'P004'),
('U0005', 'AR005', 'P005');

COMMIT;
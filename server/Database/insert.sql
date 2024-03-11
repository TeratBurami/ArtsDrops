USE artsdrops;

INSERT INTO Artist VALUES
('AT001', 'Leonardo Darvinci', 10, '1897-02-05'),
('AT002', 'Vangough', 101, '1903-09-22'),
('AT003', 'Suspicious person', 0, '2024-1-1');


INSERT INTO Art VALUES
('AR001', 'Fancy Sky', 'Digital Art', 2000.00, 1, 'Fancy sky and city digital art', 'https://i.pinimg.com/564x/44/68/98/44689878b2de08cabd23ff2c31658ce5.jpg', 'AT003'),
('AR002', 'PalaceLearning', 'Painting', 8000.00, 2, 'PalaceLearning Cafe Terrace at Night Poster by Vincent Van Gogh - 1881 - Fine Art Print - The Cafe Terrace on The Place du Forum','https://i.pinimg.com/564x/3c/c7/af/3cc7af43775361a90a5c13ab2422ea9b.jpg', 'AT003'),
('AR003', 'Matisse','Painting',1800.00,3,'Why Was Matisse Obsessed with Goldfish?','https://i.pinimg.com/564x/43/4c/dc/434cdcac98e36e57e15048b9e0eadfb4.jpg', 'AT001'),
('AR004', 'Pin','Painting','4250.00',3,'Pin by Eve Ringers on Portrait | Art prints boho, Abstract art painting, Art inspiration painting','https://i.pinimg.com/564x/48/1f/a7/481fa74f181e64cf8578ea1b54c97076.jpg', 'AT003');

COMMIT;
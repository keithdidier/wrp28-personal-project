insert into users 
(first_name, last_name, email, auth_id)
values 
($1, $2, $3, $4)
returning *;


select * from users 
where auth_id = $1

delete from cart 
where cart_id = $1
returning *

select * from users 
where id = $1;

create table if not exists users (
    id serial primary key,
    first_name varchar(180),
    last_name varchar(180),
    email varchar(180),
    auth_id text
)

create table products (
    product_id serial primary key,
    product_name varchar(180),
    image_url text,
    price decimal,
    size text,
    color text
)

insert into products (
    product_name, image_url, price, size, color
)
values 
()

/******** Data in products table 

('Magic Cat', 'https://s3.amazonaws.com/redbubble-clone/magic-cat-hoodie.jpg', 46.88, 'Medium', 'Grey')
('Jellyfish', 'https://s3.amazonaws.com/redbubble-clone/jellyfish-t-shirt.jpg', 29.50, 'Medium', 'Black'),
('Medusa', 'https://s3.amazonaws.com/redbubble-clone/medusa-t-shirt.jpg', 27.50, 'Large', 'Green'),
('The Mountains Are Calling', 'https://s3.amazonaws.com/redbubble-clone/mountains-tank-top.jpg', 22.18, 'Medium', 'Dark Blue'),
('Octopus Scuba Diver', 'https://s3.amazonaws.com/redbubble-clone/octopus-t-shirt.jpg', 21.13, 'Medium', 'Light Blue')
('Bohemian Mandala', 'https://s3.amazonaws.com/redbubble-clone/bohemian-t-shirt.jpg', 33.18, 'Medium', 'Black'),
('React JS', 'https://s3.amazonaws.com/redbubble-clone/react-t-shirt.jpg', 26.36, 'Large', 'Black'),
('Node JS', 'https://s3.amazonaws.com/redbubble-clone/node-t-shirt.jpg', 22.00, 'Small', 'Light Grey'),
('Newton', 'https://s3.amazonaws.com/redbubble-clone/newton-t-shirt.jpg', 19.50, 'Medium', 'Light Grey'),
('Planning Like A Pro', 'https://s3.amazonaws.com/redbubble-clone/code-planning-t-shirt.jpg', 19.50, 'Large', 'Blue'),
('Osiris', 'https://s3.amazonaws.com/redbubble-clone/osiris-t-shirt.jpg', 28.88, 'Medium', 'Dark Blue'),
('Ornate Elephant', 'https://s3.amazonaws.com/redbubble-clone/ornate-elephant-t-shirt.jpg', 29.16, 'Small', 'White'),
('Indian Summer', 'https://s3.amazonaws.com/redbubble-clone/indian-summer-t-shirt.jpg', 37.33, 'Medium', 'White'),
('Wolf', 'https://s3.amazonaws.com/redbubble-clone/wolf-t-shirt.jpg', 22.00, 'Small', 'White'),
('Foxy Brown', 'https://s3.amazonaws.com/redbubble-clone/foxy-brown-t-shirt.jpg', 28.00, 'Medium', 'Black'),
('Arrow Triangle', 'https://s3.amazonaws.com/redbubble-clone/arrow-triangle-t-shirt.jpg', 38.00, 'Large', 'Denim'),
('Tesla Logo Merchandise', 'https://s3.amazonaws.com/redbubble-clone/tesla-logo-t-shirt.jpg', 23.52, 'Medium', 'Black'),
('Pocket John', 'https://s3.amazonaws.com/redbubble-clone/pocket-john-hoodie.jpg', 45.00, 'Medium', 'Grey'),
('Alien', 'https://s3.amazonaws.com/redbubble-clone/alien-t-shirt.jpg', 28.27, 'Small', 'White'),
('Tesla and the Pigeon', 'https://s3.amazonaws.com/redbubble-clone/tesla-and-the-bird-t-shirt.jpg', 20.80, 'Medium', 'Heather Grey')
*********/

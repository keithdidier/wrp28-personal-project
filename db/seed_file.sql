insert into users 
(first_name, last_name, email, auth_id)
values 
($1, $2, $3, $4)
returning *;


select * from users 
where auth_id = $1


create table if not exists users (
    id serial primary key,
    first_name varchar(180),
    last_name varchar(180),
    email varchar(180),
    auth_id text
)

select * from users 
where id = $1;

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

*********/

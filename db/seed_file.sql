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
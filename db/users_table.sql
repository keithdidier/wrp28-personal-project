create table if not exists users (
    id serial primary key,
    first_name varchar(180),
    last_name varchar(180),
    email varchar(180),
    auth_id text
)
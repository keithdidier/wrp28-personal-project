select * from cart
join products on cart.product_id = products.product_id
where user_id = $1;
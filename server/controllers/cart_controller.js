module.exports = {
    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const {product_id, user_id} = req.params;

        db.add_to_cart([product_id, user_id])
            .then(usersItems => res.status(200).send(usersItems))
            .catch(() => res.status(500).send());
    },

    getItemsInCart: (req, res, next) => {
        const db = req.app.get('db');
        const {user_id} = req.params;
        
        db.get_items_in_cart([user_id])
        .then(items => res.status(200).send(items))
        .catch(() => res.status(500).send());
    },

    removeFromCart: (req, res, next) => {
        const db = req.app.get('db');
        const {cart_id, user_id} = req.params;

        db.remove_from_cart([cart_id])
            .then(() => {
                db.get_items_in_cart([user_id])
                    .then(items => res.status(200).send(items))
                    .catch(() => res.status(500).send());
            })
            .catch(() => res.status(500).send());
    }
}
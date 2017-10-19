module.exports = {
    getAll: (req, res, next) => {
        const db = req.app.get('db');

        db.all_products()
            .then(products => res.status(200).send(products))
            .catch(() => res.status(500).send());
    },

    getOne: (req, res, next) => {
        const db = req.app.get('db');
        const { params } = req;

        db.product_by_id([params.id])
            .then(singleProduct => res.status(200).send(singleProduct[0])) 
            .catch((err) => res.status(500).send(err));
    }
}
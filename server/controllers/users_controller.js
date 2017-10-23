module.exports = {
    getCurrentUser: (req, res, next) => {
        const db = req.app.get('db');
        let { id } = req.user;

        db.find_current_user(id)
            .then(user => res.status(200).send(user))
            .catch(err => res.status(500).send("Wrong!"))

    }
}
require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const massive = require('massive');
// const passport = require('passport');
// const Auth0Strategy = require('passport-auth0');
const products_controller = require('./controllers/products_controller');


const app = express();

// app.use(bodyParser.json());
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: true
// }))

// app.use(passport.initialize());
// app.use(passport.session());

// massive(process.env.CONNECTION_STRING).then(db => {
//     app.set('db', db);
// })


// passport.use(new Auth0Strategy({
//     domain: process.env.AUTH_DOMAIN,
//     clientID: process.env.AUTH_CLIENT_ID,
//     clientSecret: process.env.AUTH_CLIENT_SECRET,
//     callbackURL: process.env.CALLBACK_URL
// }, function (accessToken, refreshToken, extraParams, profile, done) {

//     const db = app.get('db');

//     db.find_user([profile.identities[0].user_id]).then(user => {
//         if(user[0]) {
//             return done(null, user[0].id)
//         } else {
//             const user = profile._json;

//             db.create_user([user.name,
//             user.email, user.picture, user.identities[0].user_id])
//             .then( user => {
//                 return done(null, user[0].id);
//             })
//         }
//     })

// }))

// app.get('/auth', passport.authenticate('auth0'));
// app.get('/auth/callback', passport.authenticate('auth0', {
//     successRedirect: 'http://localhost:3000/#/test',
//     failureRedirect: '/auth'
// }))

// app.get('/auth/me', (req, res) => {
//     if(!req.user) {
//         return res.status(404).send('User not found');
//     }
//     return res.status(200).send(req.user);
// })

// app.get('/auth/logout', (req, res) => {
//     req.logOut();
//     res.redirect(302, 'http://localhost:3000/#/')
// }) 


// passport.serializeUser(function (id, done) {
//     done(null, id);
// })

// passport.deserializeUser(function (id, done) {
//     app.get('db').find_current_user([id]
//     ).then( user => {
//         done(null, user[0]);
//     }) 
// })

app.get('/api/products', products_controller.getAll);
app.get('/api/product/:id', products_controller.getOne);

const PORT = 3010;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
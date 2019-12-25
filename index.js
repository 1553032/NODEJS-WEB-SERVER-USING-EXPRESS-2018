require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const app = express();

const userRoute = require('./routes/users.route');
const authRoute = require('./routes/auth.route');
const productRoute = require('./routes/products.route');
const cartRoute = require('./routes/cart.route');

const authValidation = require('./validation/auth.validation');

const sessionMiddleware = require('./middleware/session.middleware');
const port = 5000;

app.set('view engine', 'pug');
app.set('views', 'views');
app.use(express.static('public'));
app.use(cookieParser(process.env.Signature));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
	res.redirect('/products');
});

app.use('/users', authValidation.authLogin, userRoute);
app.use('/auth', authRoute);
app.use('/products', sessionMiddleware, productRoute);
app.use('/cart', cartRoute);

app.listen(port, () => console.log('Server is listening on port', port));

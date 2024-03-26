'use strict';

/**
 * node modules
 */

const cors = require('cors');
const cookieParser = require('cookie-parser');

/**
 * custom modules
 */

const login = require(`./src/routes/login.route`);

//Initial express app

const express = require('express'); 
const app = express();


/**
 * EJS Setting
 */
app.set('view engine', 'ejs');

/**
 * Setting static directory
 */
app.use(express.static(`${__dirname}/public`));

/**
 * Enable Cors and cookie parser
 */
app.use(cors()).use(cookieParser)


/**
 * Login Page
 */

app.use('/Login', login);


app.listen(5000, () => {
     console.log('Server listening at http://localhost:5000');
}); 
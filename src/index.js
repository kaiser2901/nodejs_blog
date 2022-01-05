// Sử dụng thư viện
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
//xử lý dữ liệu middleware dạng form (html)
app.use(
    express.urlencoded({
        extended: true,
    }),
);
//xử lý dữ liệu json (javascript,...)
app.use(express.json());

//HTTP logger
// app.use(morgan('combined'));

//Template Engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Route init
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

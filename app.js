const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require('path');
const Sequelize = require('sequelize');

const app = express();

// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({
    limit: '5mb',
    extended: false
}));
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "Hi from api" });
});

// routes
var apiVnatkRouter = require('./routes/api/vnatk.js');

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
app.use('/api/vnatk', apiVnatkRouter);

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

// database
// const db = require("./models");
// const Role = db.role;
// //force: true will drop the table if it already exists
// db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//     console.log('Drop and Resync Database with { force: true }');
//     initial();
// });

function initial() {
    Role.create({
        id: 1,
        name: "developer",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    Role.create({
        id: 2,
        name: "tester",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    });

    Role.create({
        id: 3,
        name: "admin",
        createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    });
}
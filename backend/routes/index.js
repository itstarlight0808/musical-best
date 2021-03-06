const express = require('express');
const path = require("path");
const userController = require("../controllers/userController");
const eventController = require("../controllers/eventController");

const applyRoutes = app => {
    app.use("/api/users", userController);
    app.use("/api/event", eventController);


    app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
    app.use(express.static(path.join(__dirname, '/../frontend/build')));
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    });
}

module.exports = applyRoutes;
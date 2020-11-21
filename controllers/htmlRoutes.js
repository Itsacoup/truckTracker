var path = require("path");


module.exports = function (app) {


    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, ".../layouts/main.html"));
    });

    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../views/index.html"));
    });

};
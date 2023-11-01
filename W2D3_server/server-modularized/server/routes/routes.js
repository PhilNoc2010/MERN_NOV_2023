const users = require("../models/user");

module.exports = (app) => {

    // READ ALL
    app.get("/api/users", (req, res) => {
        res.json(users);
    });

    // CREATE
    app.post("/api/users", (req, res) => {
        console.log(req.body);
        users.push(req.body);
        res.json({ status: "ok" });
    });

    // READ ONE
    app.get("/api/users/:id", (req, res) => {
        console.log(req.params.id);
        res.json(users[req.params.id]);
    });

    // UPDATE
    app.put("/api/users/:id", (req, res) => {
        const id = req.params.id;
        users[id] = req.body;
        res.json({ status: "ok" });
    });

    // DELETE
    app.delete("/api/users/:id", (req, res) => {
        const id = req.params.id;
        users.splice(id, 1);
        res.json({ status: "ok" });
    });
};


const express = require("express");
const app = express();
const PORT = 8000;

//! make sure these lines are above any app.get or app.post code blocks
// *** MIDDLEWARE ***
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
    { firstName: "Reimu", lastName: "Hakurei" },
    { firstName: "Marisa", lastName: "Kirisame" },
    { firstName: "Sanae", lastName: "Kochiya" },
    { firstName: "Sakuya", lastName: "Izayoi" },
    { firstName: "Momiji", lastName: "Inubashiri" }
];

//==========  ROUTES ==============
// dummy route
app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});

// ======== READ ALL ========
app.get("/api/users", (req, res) => {
    res.json(users);
});

// ======== CREATE ========
app.post("/api/users", (req, res) => {
    // req.body will contain the form data from Postman or from React
    console.log(req.body);
    // we can push it into the users array for now...
    // later on this will be inserted into a database
    users.push(req.body);
    // we always need to respond with something
    res.json({ status: "ok" });
});


// if we want to get a user with a specific id, we can make the id a part of the url
// be sure to preface the id variable with a `:` colon
// ======== READ ONE ========
app.get("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    console.log(req.params);
    console.log(req.params.id);
    // assuming this id is the index of the users array we could return one user this way
    res.json(users[req.params.id]);
});

// ======== UPDATE ========
app.put("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const { id } = req.params;
    // assuming this id is the index of the users array we can replace the user like so
    users[id] = req.body;
    // we always need to respond with something
    res.json({ status: "ok" });
});

// ======== DELETE ========
app.delete("/api/users/:id", (req, res) => {
    // we can get this `id` variable from req.params
    const id = req.params.id;
    // assuming this id is the index of the users array we can remove the user like so
    users.splice(id, 1);
    // we always need to respond with something
    res.json( users );
});


//! to start a server at the VERY BOTTOM of the file
app.listen(PORT, () => console.log(` >>> Server is up and running on PORT ${PORT} and is listening for REQuests to RESpond to`));
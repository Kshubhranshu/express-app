const { Router } = require("express");
const route = Router();

route.get("/", (req, res) => {
    res.send("inside book route");
});

route.get("/:id", (req, res) => {
    const id = req.params.id;
    res.send(id);
});

route.get("/:name", (req, res) => {
    const id = req.params.id;
    res.send(id);
});

module.exports = route;

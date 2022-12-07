//implement the routing for courses take reference from book

app.get("/api/courses", (req, res) => {
    res.send(courses);
});

app.post("/api/courses", (req, res) => {
    const reqPayload = req.body;
    console.log(req.body);
    res.send(reqPayload);
});

app.get("/api/courses/:name?query&sort", (req, res) => {
    const id = req.params.id;
    res.send(id);
});

const express = require("express");
const app = express();

const book = require("./routes/book");

app.use(express.json());
app.use(express.urlencoded());

// inject and initialize the db connection here

app.get("/api/health", validate, (req, res, next) => {
    res.send(`Backend server is active status:active & time:${new Date()}`);
});

app.use("/api/books", book);
// inject the course api routes here

// something is missing in this middleware function, find out and try to update the middleware function
function validate() {
    console.log("hello");
    next();
}

app.use((req, res) => {
    res.status(404).send("You are looking for something that we not have!");
});

const port = process.env.PORT || 3000; // dotenv
const host = process.env.HOST || "localhost";

app.listen(port, () => {
    console.log(`Express server listening at http://${host}:${port}`);
});

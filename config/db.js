// move the mongodb connection function inside this file

const mongoUrl = process.env.MONGODB_URI;
mongoose
    .connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Database Connected Successfully");
    })
    .catch((err) => {
        console.log("Database Not Connected Successfully : " + err);
    });

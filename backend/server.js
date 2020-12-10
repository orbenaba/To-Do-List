import "@babel/polyfill";
import express from "express";
import { json, urlencoded } from "body-parser";
import cors from "cors";
import routes from "./app/routes";
import db from "./app/models";

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Rescana team 5 ToDo list." });
});


(async function initDb(){
  try {
    await db.mongoose
      .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify : false
      })
    console.log("Connected to the database!");
  }
  catch (err) {
    console.log("Cannot connect to the database!", err);
    process.exit();
  }
})();


routes(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

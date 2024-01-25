// console.log(
//   "This is a starter kit for this amazing project. By Yu(Omie)"
// );

import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

// app.get("/hello", (req, res, next) => {
//   return res.send("Hello");
// });

// app.post("/hello2", (req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Yeah");
// }

// app.delete("/hello2", (req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Not available");
// });

// app.delete("/user/:id", (req, res, next) => {
//   console.log(req.params.id);
//   return res.send("dynamic request");
// });

// connections and listeners
// const PORT = process.env.PORT || 6000;
connectToDatabase()
    .then(() => {
        app.listen(8080,() => console.log("Server Open & Connected to Database!"));
})
.catch(err => console.log(err));




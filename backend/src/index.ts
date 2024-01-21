// console.log(
//   "This is a starter kit for this amazing project. By Yu(Omie)"
// );

import express from "express";

const app = express();

// middlewares
app.use(express.json());

// app.get("/hello", (req, res, next) => {
//   return res.send("Hello");
// });

// app.post("/hello2", (req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Yeah");
// });

// app.delete("/hello2", (req, res, next) => {
//   console.log(req.body.name);
//   return res.send("Not available");
// });

// app.delete("/user/:id", (req, res, next) => {
//   console.log(req.params.id);
//   return res.send("dynamic request");
// });

// connections and listeners
app.listen(6000,() => console.log("Server Open"));

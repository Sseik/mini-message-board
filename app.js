import express from "express";
import indexRouter from "./routes/indexRouter.js";
import path from "node:path";

const app = express();
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");

const assetsPath = path.join(import.meta.dirname, "public");
app.use(express.static(assetsPath));
app.use(express.urlencoded());

app.use("/", indexRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
    throw err;
  }
  console.log("Started server");
});

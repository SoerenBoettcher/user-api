import express, { json } from "express";
import { UserRouter } from "./routes/User.routes.js";
import { Logger } from "./middleware/logger.js";

const app = express();
const port = 3000;

app.use(json());
app.use(Logger);
app.use("/user", UserRouter);

app.all("*", (req, res) => {
  res.status(400).json({
    code: 400,
    answer: "Endpoint not found!",
  });
});

app.listen(port, () => {
  console.log(`Up at: http://localhost:${port}`);
});

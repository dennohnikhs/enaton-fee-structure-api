import express, { Express, Request, Response } from "express";
const connection = require("./db/connection");
const v1Routes = require("./routes/unprotected-routes/v1");

const app = express();
app.use(express.json());
app.use("/api", v1Routes);
const port = 4500;

app.get("/", (req: Request, res: Response) => {
  // res.status(200).send("Express + TypeScript Server");
  console.log("server connected started");
});

async function connectToDatabase() {
  try {
    await connection.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connectToDatabase();

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

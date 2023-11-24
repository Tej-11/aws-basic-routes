import express, { Express, Request, Response } from "express";
import * as dotenv from "dotenv";
import path from "path";

export const app: Express = express();

const envPath: string = path.join(__dirname + "/.env");
dotenv.config({ path: envPath });
const port = process.env.DEV_PORT as string;

app.get("/first-route", async (req, res) => {
  try {
    res.status(200).send("Hey.. this is the first route");
  } catch (error) {
    res.status(500).send(error);
  }
});
app.get("/second-route", async (req, res) => {
  try {
    res.status(200).send("Hey.. this is the second route");
  } catch (error) {
    res.status(500).send(error);
  }
});

dotenv.config({ path: envPath });
const startServer = (serverPort: String) => {
  app.listen(serverPort, () => {
    console.log(`The servr is running in the port ${serverPort}`);
  });
};

startServer(port);

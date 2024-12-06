import express, { Application, Request, Response } from "express";
import cors from "cors";
import { EventRouter } from "./routers/event.router";

const PORT: number = 8000;
const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("Welcome to my API");
});

const eventRouter = new EventRouter();

app.use("/api/events", eventRouter.getRouter());

console.log(process.env.JWT_KEY);

app.listen(PORT, () => {
  console.log(`server running on -> http://localhost:${PORT}/api`);
});

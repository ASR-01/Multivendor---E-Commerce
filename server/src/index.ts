import Express, { Request, Response } from "express";
import dotenv from "dotenv";
import userRoute from "./routes/index.routes";
dotenv.config();

const app = Express();

app.use(Express.json());


app.use("/api/v1/", userRoute);

app.get("*", (req: Request, res: Response) =>
  res.send("I  Richest man in the World!")
);



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});

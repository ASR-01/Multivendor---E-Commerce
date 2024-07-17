import express, { Express, Request, Response } from "express";
import { PORT } from "./secrets";
import RouteRouter from "./routes";
import { globalErrorMiddleWare } from "./middlewares/error.middlewares";



const app: Express = express();
app.use(express.json())



app.use("/api/v1/",RouteRouter)



app.use(globalErrorMiddleWare)

app.listen(PORT, () => {
  console.log(`Server is Listening on PORT ${PORT}`);
});

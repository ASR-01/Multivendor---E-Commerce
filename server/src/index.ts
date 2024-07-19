import express, { Express, Response, Request } from "express";
import UserRouter from "./routes/users.routes";
import dotenv from "dotenv";
import productRouter from "./routes/product.routes";
import categoryRouter from "./routes/category.routes";
import AddressRouter from "./routes/address.routes";
import StoreRouter from "./routes/store.routes";

dotenv.config();

const app: Express = express();

app.use(express.json());

app.use("/api/v1", UserRouter);
app.use("/api/v1", StoreRouter);
app.use("/api/v1", productRouter);
app.use("/api/v1", categoryRouter);
app.use("/api/v1", AddressRouter);

app.get("/", (req: Request, res: Response) => {
  res.json({ success: true, msg: "I am Aditya Richest Man in the World" });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server Is Listing on Port ${PORT}`);
});


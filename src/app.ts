import express, {Request , Response} from "express";
import { apiRutas } from "./routes";
import morgan from "morgan";
require("dotenv").config();
import cors from 'cors';

const app = express();

app.use(express.json());

app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));


//rutas
apiRutas(app)

app.get("/", (req:Request, res:Response) => {
  res.send("Bienvenido a mi servidor");
});

export default app;

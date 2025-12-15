import express, {Express,Request,Response} from "express";
import cors from "cors";
const app:Express=express();
app.use(cors());
app.use(express.json());
const port:number=3000;
import getroute from "./routes/get"
import postroute from "./routes/post"
app.use("/",getroute);
app.use("/",postroute);
app.listen(port,()=>{
  console.log(`Listening on port http://localhost:${port}`);
})


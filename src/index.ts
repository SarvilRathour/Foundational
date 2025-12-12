import express from "express";
import cors from "cors";
const app=express();
app.use(cors());
const port:number=3000;
import getroute from "./routes/get"
app.use("/",getroute);
app.listen(port,()=>{
  console.log(`Listening on port http://localhost:${port}`);
})


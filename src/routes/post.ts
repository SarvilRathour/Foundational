import {Router,Response,Request} from "express";
const router=Router();
router.post("/post",(req:Request,res:Response)=>{
  const name=req.body.inname;
  const password=req.body.inpassword;
  res.json({
    status:"ok",
    name:name,
    password:password
  });
  console.log(name);
  console.log(password);
});
export default router;

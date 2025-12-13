import {Router} from "express";
const router=Router();
router.post("/post",(req,res)=>{
  const {value}=req.body;
  res.json({
    status:"ok",
    received:value
  });
});
export default router;

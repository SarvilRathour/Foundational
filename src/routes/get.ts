import {Router,Request,Response} from "express";
const router=Router();
const fullFile={
  title:"Full File",
  content:"This is the entire file content...",
  data:[1,2,3,4,5],
}
router.get("/1",(req:Request,res:Response)=>{
  res.json(fullFile);
});
router.get("/2",(req:Request,res:Response)=>{
  res.json({msg:"hello"});
});
export default router;

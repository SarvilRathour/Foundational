import {Router} from "express";
const router=Router();
const fullFile={
  title:"Full File",
  content:"This is the entire file content...",
  data:[1,2,3,4,5],
}
router.get("/1",(req,res)=>{
  res.json(fullFile);
});
router.get("/2",(req,res)=>{
  res.json({msg:"hello"});
});
export default router;

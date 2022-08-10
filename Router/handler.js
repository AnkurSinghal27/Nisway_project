const express=require("express")
const router=express.Router()
const {get_data_by_id,get_all}=require("../controller/salary")


router.get("/salaries/:id",get_data_by_id)

router.get("/salaries",get_all)


module.exports=router
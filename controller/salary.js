const knex=require('../config/DB_connection')

const get_data_by_id=(req,res)=>{
    const id=req.params.id
    console.log(id);
    knex('salary').where({id}).then((data)=>{
        if (data.length==0){
            console.log("invalid id");
            res.send({'status':"error", 'message':"Invalid id"})
        }else{
            console.log(data);
            
            res.send({"status":"Success",'data':data})
        }
    }).catch((err)=>{
        console.log(err);
    })
}


const get_all=(req,res)=>{
    const order=req.query.order || "asc"
    const currency=req.query.currency

    const where={}
    if (currency){
        where.currency = currency
    }
    knex('salary')
    .where(where)
    .orderBy("Title",order)
    .then((data)=>{
        const count=data.length
        res.send({"status":"success","count":count,"data":data})
    })

}
module.exports={get_data_by_id,get_all}
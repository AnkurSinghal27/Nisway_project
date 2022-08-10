const csvtojson=require('csvtojson')
const fs=require('fs')


const csv_path='salary_data.csv'


csvtojson().fromFile(csv_path).then((data)=>{
    console.log(data);


    fs.writeFileSync("company_data.json",JSON.stringify(data,null,4))
})
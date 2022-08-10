require('dotenv').config()
const fs = require('fs')



const knex = require('knex')({
    client: 'mysql',
    connection: {
        user: process.env.USER,
        host: process.env.HOST,
        password: process.env.PASSWORD,
        database: process.env.DATABASE

    }
})



knex.schema.hasTable('salary').then(exists => {
    if (!exists) {
        return knex.schema.createTable('salary', table => {
            table.increments("id").primary()
            table.string("Time")
            table.string("Age")
            table.string("Industry")
            table.string("Title")
            table.string("ASalary")
            table.string("Currency")
            table.text("Location")
            table.string("Experience")
            table.text("Context")

            console.log("oooooooo");

        }).then(async() => {
            const unparsed_data = fs.readFileSync('./convesion/company_data.json')
            const data = JSON.parse(unparsed_data)

            let count = 0
            for (s of data) {
                await knex("salary").insert({ Date: s["Timestamp"],
                Age: s["How old are you?"],
                Industry: s["What industry do you work in?"],
                Title: s["Job title"],
                Anual_Salary: s["What is your annual salary?"],
                Currency: s["Please indicate the currency"],
                Location: s["Where are you located? (City/state/country)"],
                Experience: s["How many years of post-college professional work experience do you have?"], Context: s["If your job title needs additional context, please clarify here:"] })
                
                count += 1
                console.log(count);
            }

            console.log('done');


            console.log('table crated');


        }).catch((err) => {
            console.log(err);
        });
    }
});




module.exports = knex
import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres','postgres','root',{
    host:'localhost',
    dialect:'postgres'
});
const connection = async()=>{
    try{
        await sequelize.authenticate();
        console.log("Connection has been estabilished successfully.");
    }catch(error){
        console.error("Unable to connect to the database:",error);
    }
}
export{
    connection
}
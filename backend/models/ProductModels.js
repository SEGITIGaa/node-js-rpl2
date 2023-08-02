import {Sequelize} from "sequelize";
import db from "../config/DataBase.js";

const { DataTypes } = Sequelize;

const product = db.define('product', {
    name:DataTypes.STRING,
    image:DataTypes.STRING,
    url:DataTypes.STRING
},{
    freezeTableName: true
});

// module.exports = product;
export default product;

(async()=>{
    await db.sync();
})();

import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';
import users from "./src/data/users.js";
import products from "./src/data/products.js";
import User from './src/models/userModels.js';
import Product from './src/models/productModel.js';
import Order from "./src/models/orderModel.js";
import connectBD from './src/config/db.js';

connectBD();
//Al ejecutar: yarn run create se lanza la función de importData.
//Al ejecutar: yarn run destroy se ejecuta la función destroyData.


const importData = async () =>{
    try{
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createUsers = await User.insertMany(users);
        const adminUser = createUsers[0]._id;
       // console.log(adminUser)
        const sampleProducts= products.map((product)=>{
            return { ...product, user: adminUser};
        });

        await Product.insertMany(sampleProducts);
        console.log('Data imported!'.green.inverse);
        process.exit();
    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
};
const detroyData= async () => {
    // Usar un bloque try-catch
    // Usar deleteMany para Order, Product y User
    // Mostrar log de 'Data detroyed!'
    // Lanzar process.exit(1)
    // Si surge un error mostrar log del error
    // Y lanzar process.exit
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        console.log("Data Destroyed!".red.inverse);
        process.exit();
      } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
      }
};

if (process.argv[2] === '-d'){
    detroyData();
    //console.log("estoy aqui");
    //console.log("process" +process.argv[2]);
} else {
    importData();
    //console.log("estoy aqui ahora");
} 
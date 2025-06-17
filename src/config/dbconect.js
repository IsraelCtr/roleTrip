import mongoose, {mongo}from 'mongoose';


 async function conectiondatabase() 
 { mongoose.connect("mongodb+srv://israelcastroimc:im2Il1g69Oe3xYNm@cluster0.dgp5gsg.mongodb.net/viagem?retryWrites=true&w=majority&appName=Cluster0")
    return mongoose.connection;
 };
export default conectiondatabase;
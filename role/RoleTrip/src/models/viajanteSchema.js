import mongoose from "mongoose";
import {malaSchema} from "./mala.js";


const viajanteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    nacionalidade: {
        type: String,
    },
    dataDeViagem: {
        type: Date,
        required: true
    },
    destino: {
        type: String,
        required: true
    },
    mala : malaSchema
},
{ versionKey: false});

const viajanteModel = mongoose.model("Viajante", viajanteSchema);

export default viajanteModel ;

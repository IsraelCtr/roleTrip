import mongoose from "mongoose";
const malaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId, auto: true},

    malaDeDespacho: {
        type: Array,
        required: true
    },
    malaDeMao: {
        type: Array,
        required: true
    },
    malaPessoal: {
        type: Number,
        required: true
    }
}, { versionKey: false });

const mala = mongoose.model('mala', malaSchema);

export { malaSchema, mala};
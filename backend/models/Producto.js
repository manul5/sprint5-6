const mongoose = require ('mongoose');
const productoSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    descripcion: {
        type: String,
        default: ''
    },
    precio: {
        type: number,
        require: true,
        min: 0
    },
    stock: {
        type: number,
        default: 0,
        min: 0
    },
    imagenUrl: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
})
module.exports = mongoose.model('Producto', productoSchema);
const mongoose = require('mongoose')
mongoose.Promise = global.Promisse;

const modelSchema = new mongoose.Schema({
    model: String,
    brand: String,
    year: Number,
    color: String,
    fuel: String,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true
    },
    air: Boolean,
    eletricWindow: Boolean

});

const modelName = 'Car'

if(mongoose.connection && mongoose.connection.models[modelName]){
    module.exports = mongoose.connection.models[modelName];
}else {
    module.exports = mongoose.model(modelName, modelSchema);
}
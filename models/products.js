const mongoose=require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true,
    },

    price: {
        type: Number,
        required:[true,"Price must be provided"]
},

  
    feature: {
        type: Boolean,
        default:false,
    },
    rating: {
        type: Number,
        default:9.8
    },
    company:{
        type: String,
        enum: {
            values: ["apple", "samsung", "hp", "dell"],
            message: `{values} is not supported`
        },
        createdAt:{
            type: Date,
                default:Date.now(),
            }
    }
})

module.exports=mongoose.model('Product',productSchema)



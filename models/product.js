const { default: mongoose } = require("mongoose")
const momgoose= require("mongoose")
const schema = momgoose.Schema(
    {
        "productname":String,
        "productid":String,
        "price":String,
        "title":String,
        
    }
)
let productmodel =mongoose.model("products",schema)
module.exports={productmodel}




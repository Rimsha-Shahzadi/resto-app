const { default: mongoose } = require("mongoose");

const restaurantModel = new mongoose.Schema({
    name:String,
    email:String,
    address:String,
    contact:String,
    city:String,
});

export const restaurantScheme = mongoose.models.restaurants
|| mongoose.model("restaurants",restaurantModel);

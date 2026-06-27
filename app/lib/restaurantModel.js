const { defaullt: mongoose } = require("mongoose");


const restaurantModel = new mongoose.Schema({
    name:string
});

export const restaurantScheme = mongoose.models.restaurants
|| mongoose.model("restaurants",restaurantModel)
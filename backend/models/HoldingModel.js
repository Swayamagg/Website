const {model} =require("mongoose");
const {HoldingSchema}=require("../schemas/holdingSchema");

const HoldingModel=new model("Holding",HoldingSchema);
module.exports={HoldingModel};
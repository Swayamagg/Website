const {model} =require("mongoose");
const {PositionSchema}=require("../schemas/positionSchema");

const PositionModel=new model("Position",PositionSchema);
module.exports={PositionModel};
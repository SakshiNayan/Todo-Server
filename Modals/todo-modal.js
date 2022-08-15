const mongoose=require("mongoose")

const TodoSchema=mongoose.Schema({
    activity: String,
    status: String,
    timetaken: String,
    action: String,

})
const todoModal = mongoose.model("taskAdd",TodoSchema)
module.exports= todoModal;
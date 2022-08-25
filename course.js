var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = new Schema({
    Course: {type: String, required:true},
    Time: {type:String, required:true},
    CourseCode: {type: String, required: true},
    EnrolmentTime: {type:String, required:true},
    NumberOfCredits: {type:Number, required:true},
});

module.exports = mongoose.model('Course', CourseSchema);

const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name: String,
  email: String,
  department: String,
  year: Number,
  cgpa: Number
});

module.exports = mongoose.model("Student", StudentSchema);

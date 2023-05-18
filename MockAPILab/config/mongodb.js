const mongoose = require("mongoose");
const uri = "mongodb://127.0.0.1:27017/mockAPILab";
module.exports = () => {
  return mongoose
    .connect(uri, { useNewUrlParser: true })
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));
};

const mongoose = require("mongoose");
const DBConnection = async () => {
  try {
    const con = await mongoose.connect(process.env.URI, {
      useUnifiedTopology: true,
    });
    console.log("connected to db", con.connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = DBConnection;

import mongoose from "mongoose";

const connectDB = async () => {
  if (!mongoose.connections[0].readyState) {
    await mongoose
      .connect(process.env.MONGOURI!)
      .then(() => {
        console.log("db vs connected");
      })
      .catch(() => {
        console.log("db vs disconnected");
      });
  } else {
    console.log("Database already connected");
  }
};

export default connectDB;

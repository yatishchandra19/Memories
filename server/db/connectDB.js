import mongoose from "mongoose";

const connectDB = (uri) => {
  return mongoose.connect(
    uri
    //     , {
    //     useNewUrlParser: true,
    //     useCreateIndex: true,
    //     useFindAndModify: false,
    //     useUnifiedTopology: true,
    //   }
  );
};

export default connectDB;

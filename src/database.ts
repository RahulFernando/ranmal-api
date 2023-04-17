import mongoose, { ConnectOptions } from "mongoose";

const main = () => {
  mongoose.Promise = global.Promise;

  const conn = mongoose.connect(`${process.env.MONGO_URI}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions);

  return conn;
};

export default main;

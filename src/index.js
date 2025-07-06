import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_URI}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected successfully: $
    {connectionInstance.connection.host}`);
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;

// const app = express();
// async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGO_URI},/${DB_NAME}`);
//     app.on("error", (err) => {
//       console.error("Error in app:", err);
//       throw err;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`Server is running on port ${process.env.PORT}`);
//     });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// };

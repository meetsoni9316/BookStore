import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./route/book.route.js";
import userroute from "./route/user.route.js";
import contactroute from "./route/contact.route.js";
import emailroute from "./route/email.route.js";
import cors from "cors";

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
dotenv.config();


const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURL;

//  connect to mongo
const connectToDatabase = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

connectToDatabase();
// define routes
app.use("/book", bookRoute);
app.use("/user", userroute);
app.use("/user", contactroute);
app.use("/user", emailroute);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

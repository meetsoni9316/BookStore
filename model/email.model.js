import mongoose from "mongoose";

const emailschema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
});
const Email = mongoose.model("Email", emailschema);
export default Email;

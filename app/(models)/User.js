import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const userSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { timestamps: true }
);

// init User with models.user if already exists else create new User model using schema
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User; // timestamp 1:00:36

// homepage. add css. pictures. text. upload. s3 bucket.

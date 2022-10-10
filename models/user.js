const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    username: {
      type: String,
      default: "new user"
    },
    password: {
      type: String,
      required: true
    },
    refreshToken: String,
    role: {
      type: String,
      default: "user",
      enum: [admin, user]
    },
    image: {
      imageId: String,
      imageUrl: String
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("users", UserSchema);

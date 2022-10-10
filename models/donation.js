const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  donationSessionId: {
    type: Schema.Types.ObjectId,
    ref: "donationSessions",
    required: true
  },
  donationDay: {
    type: Date,
    required: true
  },
  amount: {
    type: Number,
    required: true
  },
  message: {
    type: String
  }
});

module.exports = mongoose.model("donations", DonationSchema);

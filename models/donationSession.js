const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSessionSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  desiredMoney: {
    type: Number,
    required: true
  },
  currentAmount: {
    type: Number,
    required: true
  },
  startingDay: {
    type: Date,
    required: true
  },
  endingDay: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  images: [{ imageId: String, imageUrl: String }]
});
module.exports = mongoose.model("donationSessions", DonationSessionSchema);

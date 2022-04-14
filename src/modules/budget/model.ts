var mongoose = require("mongoose");

const Schema = mongoose.Schema;
const budgetSchema = new Schema(
  {
    categoryId: { type: String },
    year: { type: Number },
    month: { type: Number },
    amount: { type: Number },
  },
  { timestamps: true }
);

const budgetCollection = "budget";

// module.exports = mongoose.model('bookmarks', articleSchema);
export { budgetSchema, budgetCollection };

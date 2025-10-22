import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: { type: String},
    image: {type: String},
    url: {type: String},
    hashtag: {type: String},
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
    return {
      id: this._id,
      title: this.date,
      image: this.qualification,
      url: this.url,
      hashtag: this.hashtag,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
  
export default mongoose.model("Portfolio", Schema);
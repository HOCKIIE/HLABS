import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    title: { type: String},
    type: {type: String},
    icon: {type: String},
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
    return {
      id: this._id,
      title: this.date,
      type: this.qualification,
      icon: this.url,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
  
export default mongoose.model("Skill", Schema);
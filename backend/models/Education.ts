import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    date: { type: String},
    qualification: {type: String},
    qualificationHTML: {type: String},
    institution: {type: String},
    institutionHTML: {type: String},
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
    return {
      id: this._id,
      date: this.date,
      qualification: this.qualification,
      qualificationHTML: this.qualificationHTML,
      institution: this.institution,
      institutionHTML: this.institutionHTML,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  };
  
export default mongoose.model("Education", Schema);
import mongoose from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const Schema = new mongoose.Schema({
    date: { type: String},
    position: {type: String},
    company: {type: String},
    underline: {type: String},
    description: {
        text: {type: String},
        html: {type: []},
        list: {type: []},
    }
  },
  { timestamps: true }
);
Schema.methods.toJSON = function () {
    return {
        id: this._id,
        date: this.date,
        position: this.position,
        company: this.company,
        underline: this.underline,
        description: {
            text: this.description.text,
            html: this.description.html,
            list: this.description.list,
        },
        createdAt: this.createdAt,
        updatedAt: this.updatedAt,
    };
  };
  
export default mongoose.model<IUser>("Experience", Schema);
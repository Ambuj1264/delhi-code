import mongoose, { model, models } from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["1", "2"],
      default: "2",
    },
    image: {
      type: String,
    },
    subscribed: {
      type: Boolean,
      default:false
    },

    approved: {
      type: Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
);

const Users = models.users || model("users", contactSchema);
export default Users;

import mongoose, { model, models } from "mongoose";
const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    blogDetails:{
        type: String,
        required: true,
    },
    isDeleted: {
        type: Boolean,
        default: false,
      },
  },
  {
    timestamps: true,
  }
);

const Blogs = models.blogs || model("blogs", contactSchema);
export default Blogs;

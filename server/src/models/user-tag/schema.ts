import { Schema } from "mongoose";

const { Types: ObjectId } = Schema;

const userTagSchema: Schema = new Schema({
  user: {
    type: ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: { type: Date, default: Date.now, required: true },
});

export default userTagSchema;

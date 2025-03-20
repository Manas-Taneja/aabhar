import mongoose, { Schema, Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: String, required: true },
  imageSrc: { type: String, required: true },
  imageAlt: { type: String, required: true },
});

export default mongoose.models.Product ||
  mongoose.model<IProduct>("Product", ProductSchema);

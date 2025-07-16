import mongoose from 'mongoose';

const variantSchema = new mongoose.Schema(
  {
    size: { type: String },
    color: { type: String, required: true },
    sku: { type: String, required: true, unique: true },
    price: { type: Number, required: true, min: 0 },
    stock: { type: Number, required: true, min: 0 },
  },
  { _id: false } // prevent creating _id for subdocs
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Product name is required'],
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      default: '',
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: true,
    },
    price: {
      type: Number,
      required: [true, 'Price is required'],
      min: 0,
    },
    discount: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    variants: [variantSchema],
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;

import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    // required: true,
  },
  description: {
    type: String,
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  pictures: {},
  userId: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  address: {
    completeAddress: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    postal: {
      type: String,
      default: null,
    },
    street: {
      type: String,
      default: null,
    },
    longitude: {
      type: Number,
      default: null,
    },
    latitude: {
      type: Number,
      default: null,
    },
  },
});

export default mongoose.model('Product', ProductSchema);

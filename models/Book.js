const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true
  },
  author: {
    type: String,
    required: [true, 'Author name is required'],
    trim: true
  },
  isbn: {
    type: String,
    unique: true,
    sparse: true,
    trim: true
  },
  publishedYear: {
    type: Number,
    min: [1000, 'Year must be valid'],
    max: [new Date().getFullYear(), 'Year cannot be in the future']
  },
  genre: {
    type: String,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    min: [0, 'Price cannot be negative']
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);

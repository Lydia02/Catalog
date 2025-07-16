import Product from '../models/product.js';
import {
  buildSearchFilter,
  getPagination,
  createError,
  isValidObjectId,
} from '../utils/helpers.js';

// @route   POST /api/products
export const createProduct = async (req, res, next) => {
  try {
    const { name, description, category, price, discount, variants } = req.body;

    const productExists = await Product.findOne({ name });
    if (productExists) {
      res.status(400);
      return next(createError('Product already exists'));
    }

    const product = new Product({
      name,
      description,
      category,
      price,
      discount,
      variants,
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    next(error);
  }
};

// @route   GET /api/products
export const getProducts = async (req, res, next) => {
  try {
    const filter = buildSearchFilter(req.query, ['name', 'description']);

    if (req.query.category) filter.category = req.query.category;
    if (req.query.inStock === 'true') filter['variants.stock'] = { $gt: 0 };
    if (req.query.minPrice || req.query.maxPrice) {
      filter['variants.price'] = {};
      if (req.query.minPrice) filter['variants.price'].$gte = Number(req.query.minPrice);
      if (req.query.maxPrice) filter['variants.price'].$lte = Number(req.query.maxPrice);
    }

    const { skip, limit, page } = getPagination(req.query);
    const total = await Product.countDocuments(filter);
    const products = await Product.find(filter)
      .populate('category', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    res.status(200).json({ page, total, results: products });
  } catch (error) {
    next(error);
  }
};

// @route   GET /api/products/:id
export const getProductById = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      res.status(400);
      return next(createError('Invalid Product ID'));
    }

    const product = await Product.findById(id).populate('category', 'name');
    if (!product) {
      res.status(404);
      return next(createError('Product not found'));
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// @route   PUT /api/products/:id
export const updateProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      res.status(400);
      return next(createError('Invalid Product ID'));
    }

    const product = await Product.findById(id);
    if (!product) {
      res.status(404);
      return next(createError('Product not found'));
    }

    const { name, description, category, price, discount, variants } = req.body;

    product.name = name || product.name;
    product.description = description || product.description;
    product.category = category || product.category;
    product.price = price || product.price;
    product.discount = discount ?? product.discount;
    product.variants = variants || product.variants;

    const updated = await product.save();
    res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const patchProduct = async (req, res, next) => {
    try {
      const id = req.params.id;
      if (!isValidObjectId(id)) {
        res.status(400);
        return next(createError('Invalid Product ID'));
      }
  
      const product = await Product.findById(id);
      if (!product) {
        res.status(404);
        return next(createError('Product not found'));
      }
  
      const updatableFields = ['name', 'description', 'category', 'price', 'discount', 'variants'];
      updatableFields.forEach((field) => {
        if (req.body[field] !== undefined) {
          product[field] = req.body[field];
        }
      });
  
      const updated = await product.save();
      res.status(200).json(updated);
    } catch (error) {
      next(error);
    }
  };
  

// @route   DELETE /api/products/:id
export const deleteProduct = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!isValidObjectId(id)) {
      res.status(400);
      return next(createError('Invalid Product ID'));
    }

    const product = await Product.findByIdAndDelete(id);
    if (!product) {
      res.status(404);
      return next(createError('Product not found'));
    }

    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    next(error);
  }
};

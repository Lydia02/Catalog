import Category from '../models/Category.js';
import {
  asyncHandler,
  buildSearchFilter,
  getPagination,
  createError,
} from '../utils/helpers.js';

// @route   POST /api/categories
export const createCategory = asyncHandler(async (req, res, next) => {
  const { name, description } = req.body;

  const categoryExists = await Category.findOne({ name });
  if (categoryExists) {
    res.status(400);
    throw createError('Category already exists');
  }

  const category = new Category({ name, description });
  const savedCategory = await category.save();

  res.status(201).json(savedCategory);
});

// @route   GET /api/categories
export const getCategories = asyncHandler(async (req, res) => {
  const filter = buildSearchFilter(req.query, ['name', 'description']);
  const { limit, skip, page } = getPagination(req.query);

  const total = await Category.countDocuments(filter);
  const categories = await Category.find(filter)
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);

  res.status(200).json({
    page,
    total,
    results: categories,
  });
});

// @route   GET /api/categories/:id
export const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw createError('Category not found', 404);
  }

  res.status(200).json(category);
});

// @route   PUT /api/categories/:id
export const updateCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const category = await Category.findById(req.params.id);
  if (!category) {
    res.status(404);
    throw createError('Category not found', 404);
  }

  category.name = name || category.name;
  category.description = description || category.description;

  const updated = await category.save();
  res.status(200).json(updated);
});

// @route   DELETE /api/categories/:id
export const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    res.status(404);
    throw createError('Category not found', 404);
  }

  res.status(200).json({ message: 'Category deleted successfully' });
});

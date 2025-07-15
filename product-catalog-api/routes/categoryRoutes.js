import express from 'express';
import {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController.js';

import { validateCategory } from '../validators/categoryValidator.js';

const router = express.Router();

router.post('/', validateCategory, createCategory);
router.get('/', getCategories);
router.get('/:id', getCategoryById);
router.put('/:id', validateCategory, updateCategory);
router.delete('/:id', deleteCategory);

export default router;

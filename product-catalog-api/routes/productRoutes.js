import express from 'express';
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  patchProduct,
  deleteProduct,
} from '../controllers/productController.js';

import { validateProduct } from '../validators/productValidator.js';

const router = express.Router();

router.post('/', validateProduct, createProduct);       
router.get('/', getProducts);                          
router.get('/:id', getProductById);                    
router.put('/:id', validateProduct, updateProduct);
router.patch('/:id', patchProduct);     
router.delete('/:id', deleteProduct);         

export default router;

import { body, validationResult } from 'express-validator';

export const validateProduct = [
  body('name').notEmpty().withMessage('Product name is required'),

  body('price')
    .notEmpty().withMessage('Price is required')
    .isFloat({ min: 0 }).withMessage('Price must be a positive number'),

  body('category')
    .notEmpty().withMessage('Category is required')
    .isMongoId().withMessage('Invalid category ID'),

  body('discount')
    .optional()
    .isFloat({ min: 0, max: 100 })
    .withMessage('Discount must be between 0 and 100'),

  body('variants').isArray({ min: 1 }).withMessage('At least one variant is required'),

  body('variants.*.color')
    .notEmpty().withMessage('Variant color is required'),

  body('variants.*.sku')
    .notEmpty().withMessage('Variant SKU is required'),

  body('variants.*.price')
    .notEmpty().withMessage('Variant price is required')
    .isFloat({ min: 0 }).withMessage('Variant price must be a positive number'),

  body('variants.*.stock')
    .notEmpty().withMessage('Variant stock is required')
    .isInt({ min: 0 }).withMessage('Variant stock must be a non-negative integer'),

  // Global validation result check
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400);
      return next(new Error(errors.array().map(err => err.msg).join(', ')));
    }
    next();
  },
];

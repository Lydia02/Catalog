import { body, validationResult } from 'express-validator';

// Middleware to validate request
export const validateCategory = [
  body('name')
    .notEmpty()
    .withMessage('Name is required')
    .isLength({ min: 2 })
    .withMessage('Name must be at least 2 characters'),

  body('description')
    .optional()
    .isString()
    .withMessage('Description must be a string'),

  // Custom error formatter
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400);
      return next(new Error(errors.array().map(err => err.msg).join(', ')));
    }
    next();
  },
];

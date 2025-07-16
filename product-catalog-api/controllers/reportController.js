import Product from '../models/product.js';

// GET /api/reports/low-stock
export const getLowStockProducts = async (req, res, next) => {
  try {
    const threshold = parseInt(req.query.threshold) || 10;

    const products = await Product.find({
      'variants.stock': { $lt: threshold }
    });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// GET /api/reports/summary
export const getSummaryReport = async (req, res, next) => {
    try {
      const totalProducts = await Product.countDocuments();
      const totalCategories = await (await import('../models/Category.js')).default.countDocuments();
  
      res.status(200).json({
        totalProducts,
        totalCategories,
      });
    } catch (error) {
      next(error);
    }
  };
  

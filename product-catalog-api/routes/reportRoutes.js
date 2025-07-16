import express from 'express';
import { getLowStockProducts, getSummaryReport } from '../controllers/reportController.js';

const router = express.Router();

router.get('/low-stock', getLowStockProducts);
router.get('/summary', getSummaryReport);

export default router;

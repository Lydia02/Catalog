/**
 * @swagger
 * tags:
 *   name: Reports
 *   description: API reports and analytics
 */

/**
 * @swagger
 * /api/reports/summary:
 *   get:
 *     summary: Get summary report
 *     tags: [Reports]
 *     responses:
 *       200:
 *         description: Total number of products and categories
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 totalProducts:
 *                   type: integer
 *                 totalCategories:
 *                   type: integer
 *             example:
 *               totalProducts: 25
 *               totalCategories: 11
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/reports/low-stock:
 *   get:
 *     summary: Get products with low stock
 *     tags: [Reports]
 *     parameters:
 *       - in: query
 *         name: threshold
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Stock level threshold
 *     responses:
 *       200:
 *         description: List of low-stock products
 *         content:
 *           application/json:
 *             example:
 *               - _id: "123"
 *                 name: "Bluetooth Speaker"
 *                 variants:
 *                   - color: "Black"
 *                     sku: "SPKR-BLK-001"
 *                     stock: 4
 */


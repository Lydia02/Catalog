/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Product management
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *       - in: query
 *         name: inStock
 *         schema:
 *           type: boolean
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: List of products
 *         content:
 *           application/json:
 *             example:
 *               page: 1
 *               total: 2
 *               results:
 *                 - _id: "6876ebf6b904a6924c78b8ee"
 *                   name: "Wireless Headset"
 *                   description: "Ergonomic headset for office use."
 *                   category:
 *                     _id: "6876d7b60601c35a59011a85"
 *                     name: "Office Supplies"
 *                   price: 18.99
 *                   discount: 10
 *                   variants:
 *                     - color: "Black"
 *                       sku: "OFF-HDST-BLK-NEW"
 *                       price: 18.99
 *                       stock: 70
*/

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Product created
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876f123b904a6924c78b8ff"
 *               name: "Wireless Keyboard"
 *               description: "Slim and silent keystroke wireless keyboard"
 *               category: "6876d7b60601c35a59011a85"
 *               price: 39.99
 *               discount: 0
 *               variants:
 *                 - color: "White"
 *                   sku: "KEY-WHT-001"
 *                   price: 39.99
 *                   stock: 50
*/

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product object
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876ebf6b904a6924c78b8ee"
 *               name: "Wireless Headset"
 *               description: "Ergonomic headset for office use."
 *               category:
 *                 _id: "6876d7b60601c35a59011a85"
 *                 name: "Office Supplies"
 *               price: 18.99
 *               discount: 10
 *               variants:
 *                 - color: "Black"
 *                   sku: "OFF-HDST-BLK-NEW"
 *                   price: 18.99
 *                   stock: 70
*/

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product updated
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876f123b904a6924c78b8ff"
 *               name: "Updated Wireless Keyboard"
 *               description: "Improved design and longer battery life"
 *               category: "6876d7b60601c35a59011a85"
 *               price: 42.99
 *               discount: 5
 *               variants:
 *                 - color: "Gray"
 *                   sku: "KEY-GRY-002"
 *                   price: 42.99
 *                   stock: 30
 *               createdAt: "2025-07-16T12:00:00.000Z"
 *               updatedAt: "2025-07-16T13:30:00.000Z"
 */

/**
 * @swagger
 * /api/products/{id}:
 *   patch:
 *     summary: Partially update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Product partially updated
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876f123b904a6924c78b8ff"
 *               name: "Wireless Keyboard"
 *               description: "Updated: quieter keystroke feedback"
 *               category: "6876d7b60601c35a59011a85"
 *               price: 39.99
 *               discount: 15
 *               variants:
 *                 - color: "White"
 *                   sku: "KEY-WHT-001"
 *                   price: 39.99
 *                   stock: 45
 *               createdAt: "2025-07-16T12:00:00.000Z"
 *               updatedAt: "2025-07-16T14:45:00.000Z"
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products (with filtering and search)
 *     tags: [Products]
 *     description: Retrieve products with support for search, filters, and pagination.
 *     parameters:
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search by product name or description
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category ID
 *       - in: query
 *         name: minPrice
 *         schema:
 *           type: number
 *         description: Minimum price
 *       - in: query
 *         name: maxPrice
 *         schema:
 *           type: number
 *         description: Maximum price
 *       - in: query
 *         name: inStock
 *         schema:
 *           type: boolean
 *         description: Filter products that are in stock
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Number of products per page
 *     responses:
 *       200:
 *         description: List of filtered products
 *         content:
 *           application/json:
 *             example:
 *               page: 1
 *               total: 5
 *               results:
 *                 - _id: "123"
 *                   name: "Filtered Product"
 *                   category: { _id: "cat1", name: "Electronics" }
 *                   price: 49.99
 */


/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted
 *         content:
 *           application/json:
 *             example:
 *               message: "Product deleted successfully"
 */

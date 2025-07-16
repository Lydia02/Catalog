/**
 * @swagger
 * tags:
 *   name: Categories
 *   description: Product categories
 */

/**
 * @swagger
 * /api/categories:
 *   post:
 *     summary: Create a new category
 *     tags: [Categories]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       201:
 *         description: Category created
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876d7550601c35a59011a76"
 *               name: "Books"
 *               description: "Textbooks and novels"
 *               createdAt: "2025-07-15T22:33:57.203Z"
 *               updatedAt: "2025-07-15T22:33:57.203Z"
 */


/**
 * @swagger
 * /api/categories:
 *   get:
 *     summary: Get all categories
 *     tags: [Categories]
 *     responses:
 *       200:
 *         description: List of categories
 *         content:
 *           application/json:
 *             example:
 *               - _id: "6876d7400601c35a59011a73"
 *                 name: "Clothing"
 *                 description: "Men’s, women’s, and children’s apparel"
 *                 createdAt: "2025-07-15T22:33:36.913Z"
 *                 updatedAt: "2025-07-15T22:33:36.913Z"
 */


/**
 * @swagger
 * /api/categories/{id}:
 *   get:
 *     summary: Get a category by ID
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Category object
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876d7230601c35a59011a70"
 *               name: "Electronics"
 *               description: "Devices and gadgets"
 *               createdAt: "2025-07-15T22:33:07.090Z"
 *               updatedAt: "2025-07-15T22:33:07.090Z"
 */

/**
 * @swagger
 * /api/categories/{id}:
 *   put:
 *     summary: Update a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Category'
 *     responses:
 *       200:
 *         description: Category updated
 *         content:
 *           application/json:
 *             example:
 *               _id: "6876d7230601c35a59011a70"
 *               name: "Updated Electronics"
 *               description: "Updated description"
 *               createdAt: "2025-07-15T22:33:07.090Z"
 *               updatedAt: "2025-07-16T00:10:07.000Z"
 */

/**
 * @swagger
 * /api/categories/{id}:
 *   delete:
 *     summary: Delete a category
 *     tags: [Categories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Category deleted
 *         content:
 *           application/json:
 *             example:
 *               message: "Category deleted successfully"
 */

/**
 * @swagger
 * /api/categories/paginated:
 *   get:
 *     summary: Get all categories with pagination
 *     tags: [Categories]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           example: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           example: 10
 *         description: Number of categories per page
 *     responses:
 *       200:
 *         description: Paginated list of categories
 *         content:
 *           application/json:
 *             example:
 *               page: 1
 *               total: 25
 *               results:
 *                 - _id: "6876d7400601c35a59011a73"
 *                   name: "Clothing"
 *                   description: "Men’s, women’s, and children’s apparel"
 *                   createdAt: "2025-07-15T22:33:36.913Z"
 *                   updatedAt: "2025-07-15T22:33:36.913Z"
 */

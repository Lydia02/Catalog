import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product Catalog API',
      version: '1.0.0',
      description: 'REST API for managing products, categories, variants, and inventory',
    },
    servers: [
      {
        url: 'http://localhost:5000',
      },
    ],
    components: {
      schemas: {
        Variant: {
          type: 'object',
          properties: {
            size: {
              type: 'string',
              example: 'M',
            },
            color: {
              type: 'string',
              example: 'Black',
            },
            sku: {
              type: 'string',
              example: 'SKU-12345',
            },
            price: {
              type: 'number',
              example: 49.99,
            },
            stock: {
              type: 'integer',
              example: 25,
            },
          },
        },
        Product: {
          type: 'object',
          required: ['name', 'price', 'category', 'variants'],
          properties: {
            name: {
              type: 'string',
              example: 'Wireless Headphones',
            },
            description: {
              type: 'string',
              example: 'High quality wireless headphones with noise cancellation.',
            },
            category: {
              type: 'string',
              example: '6876d7230601c35a59011a70',
            },
            price: {
              type: 'number',
              example: 99.99,
            },
            discount: {
              type: 'number',
              example: 10,
            },
            variants: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Variant',
              },
            },
          },
        },
        Category: {
          type: 'object',
          required: ['name'],
          properties: {
            name: {
              type: 'string',
              example: 'Electronics',
            },
            description: {
              type: 'string',
              example: 'Devices and gadgets for home and office use',
            },
          },
        },
      },
    },
  },
  apis: ['./routes/*.js', './docs/*.docs.js'],

};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;

# Product Catalog API

A RESTful API for managing products and categories in an e-commerce-style catalog. Built with **Node.js**, **Express**, and **MongoDB**, the API supports CRUD operations, product variants, inventory tracking, search, filtering, and reporting all documented with **Swagger**.

---

## Table of Contents

- [Features](#features)
- [Getting Started](#-getting-started)
- [API Documentation](#api-documentation)
- [Sample Endpoints](#sample-endpoints)
- [Filtering & Search](#filtering--search)
- [Reports](#reports)
- [Validation & Error Handling](#validation--error-handling)
- [Example Product Schema](#example-product-schema)
- [Project Structure](#project-structure)
- [Video Walkthrough](#video-walkthrough)
- [Assumptions / Notes](#assumptions--notes)
- [Tech Stack](#-tech-stack)
- [Author](#-author)

---

Watch the full demo on YouTube:
https://youtu.be/ZVTMngtYzyA?si=VUQ4sQRu44C_5Cwd


##  Features

-  Full CRUD for **products** and **categories**
-  Support for **product variants** (size, color, SKU, price, stock)
- Inventory tracking per variant
- Search & filtering by name, category, price, stock, and date
- Pricing & discount support
- Error handling, input validation, and sanitization
- API documentation with Swagger UI
- Reporting: low-stock alerts and product/category summary
- Connected to **MongoDB Atlas**

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Lydia02/Catalog.git
cd product-catalog-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file based on the `.env.example`:

```dotenv
# .env.example
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
```

### 4. Start the server

```bash
npm run dev
```

---

## API Documentation

Visit:
📎 [http://localhost:5000/api-docs](http://localhost:5000/api-docs)
Interactive Swagger UI including:

* Request & response schemas
* Query parameters
* Response examples
* Error responses

---

##  Sample Endpoints

### 📁 Categories

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | `/api/categories`     | Get all categories  |
| POST   | `/api/categories`     | Create new category |
| GET    | `/api/categories/:id` | Get category by ID  |
| PUT    | `/api/categories/:id` | Update a category   |
| DELETE | `/api/categories/:id` | Delete a category   |

### Products

| Method | Endpoint            | Description                  |
| ------ | ------------------- | ---------------------------- |
| GET    | `/api/products`     | List products with filters   |
| POST   | `/api/products`     | Create product with variants |
| GET    | `/api/products/:id` | Get product by ID            |
| PUT    | `/api/products/:id` | Full update of a product     |
| PATCH  | `/api/products/:id` | Partial update of product    |
| DELETE | `/api/products/:id` | Delete a product             |

---

## Filtering & Search

Supports advanced combinations like:

```http
GET /api/products?search=mouse&category=Electronics&minPrice=20&maxPrice=50&inStock=true
```

You can filter by:

* `name` (search)
* `category` (MongoDB ID)
* `minPrice`, `maxPrice`
* `inStock=true`
* `createdAt` date

---

## Reports

| Endpoint                 | Description                    |
| ------------------------ | ------------------------------ |
| `/api/reports/low-stock` | Products below stock threshold |
| `/api/reports/summary`   | Total products and categories  |

---

## Validation & Error Handling

* Input validation with `express-validator`
* Centralized error handling middleware
* Consistent HTTP status codes (400, 404, 500)
* Sanitization with `.trim()`, `.escape()` etc.

Example error response:

```json
{
  "status": "error",
  "message": "Product name is required, Invalid category ID"
}
```

---

## Example Product Schema

```json
{
  "name": "Bluetooth Headphones",
  "description": "Noise-cancelling over-ear headphones",
  "category": "6876d7230601c35a59011a70",
  "price": 59.99,
  "discount": 10,
  "variants": [
    {
      "color": "Black",
      "sku": "BTH-BLK-001",
      "price": 59.99,
      "stock": 25
    }
  ]
}
```

---

## Project Structure

```
product-catalog-api/
├── controllers/      # Route logic
├── models/           # Mongoose schemas
├── routes/           # API routes
├── middleware/       # Error handlers
├── validators/       # Input validation
├── utils/            # Helpers (pagination, filters)
├── docs/             # Swagger docs
├── app.js            # Express setup
├── server.js         # Server entry point
└── .env.example      # Example env variables
```

---

## Video Walkthrough
Watch the full demo on YouTube:
https://youtu.be/ZVTMngtYzyA?si=VUQ4sQRu44C_5Cwd

This video demonstrates:

CRUD operations for products and categories

Filtering and multi-criteria search

Product variants and inventory tracking

Input validation and error handling

Interactive Swagger API documentation
---

## Assumptions / Notes

* Product discounts are stored numerically (e.g. `10` for 10%)
* Variants are managed per product via embedded documents
* MongoDB Atlas handles persistence

---

## 🧑‍💻 Tech Stack

* Node.js + Express.js
* MongoDB + Mongoose
* Swagger (OpenAPI 3.0)
* express-validator
* nodemon, dotenv, morgan

---



## 🧑‍🎓 Author

**Lydia Ojoawo**

Backend Development 

African Leadership University

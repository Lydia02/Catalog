// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    let statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    let message = err.message || 'Something went wrong';
  
    // Handle Mongoose invalid ObjectId
    if (err.name === 'CastError') {
      statusCode = 400;
      message = `Invalid ID format for ${err.path}`;
    }
  
    // Handle duplicate key error (e.g., unique category name)
    if (err.code === 11000) {
      statusCode = 400;
      const field = Object.keys(err.keyValue);
      message = `Duplicate value for field: ${field}`;
    }
  
    // Handle validation errors from Mongoose
    if (err.name === 'ValidationError') {
      statusCode = 400;
      message = Object.values(err.errors).map((val) => val.message).join(', ');
    }
  
    res.status(statusCode).json({
      status: 'error',
      message,
      ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    });
  };
  
  export default errorHandler;
  
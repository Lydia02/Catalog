import http from 'http';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import app from './app.js';

dotenv.config();
connectDB();

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);

// Log a message when the server starts listening
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

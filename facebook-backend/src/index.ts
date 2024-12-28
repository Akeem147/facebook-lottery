import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));

// Start the server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));

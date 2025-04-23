// Main Express server file.
// Sets up security headers, CORS, JSON parsing, and API routes.
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const apiRoutes = require("./routes/api");

const app = express();

// Middleware
app.use(helmet()); // Apply security-related HTTP headers
app.use(cors()); // Enable cross-origin requests
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

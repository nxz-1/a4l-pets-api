const express = require('express');
const app = express();
const healthRoutes = require('./routes/health');
const petsRoutes = require('./routes/pets');

app.use(express.json());

// Define routes
app.use('/api/v1', healthRoutes);
app.use('/api/v1', petsRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
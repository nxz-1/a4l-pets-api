const os = require('os');
const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
    const healthCheck = {
        uptime: process.uptime(),
        message: 'Healthy',
        timestamp: Date.now(),
        system: {
            platform: os.platform(),
            arch: os.arch(),
            cpus: os.cpus().length,
            memory: os.totalmem(),
        }
    };
    res.status(200).json(healthCheck);
});

module.exports = router;
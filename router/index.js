const getConnection = require('../db');
const router = require('express').Router();

const location = require('./location');
const course = require('./course')

router.use('/location', location);
router.use('/course', course);

router.get('/ping', (req, res) => {
    res.status(200).json({
        msg: 'pong'
    });
});

router.get('/testDatabaseConnection', async (req, res) => {
    try {
        const connection = await getConnection();
        await connection.ping();
        res.sendStatus(200);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = router;
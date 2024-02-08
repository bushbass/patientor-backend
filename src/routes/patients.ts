import express from 'express';

const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send('pong from patients router');
});



export default router;
import express from 'express';
import diagnosisService from '../services/diagnosisService';
const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send('pong from diagnoses router');
});
router.get('/', (_req, res) => {
    res.send(diagnosisService.getDiagnoses());
});


export default router;
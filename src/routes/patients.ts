import express from 'express';
// import uuid from 'uuid';
import patientService from '../services/patientService';
const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send('pong from patients router');
});
router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitivePatients());
});


export default router;


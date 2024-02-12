import express from 'express';
import patientService from '../services/patientService';
const router = express.Router();

router.get('/ping', (_req, res) => {
    res.send('pong from patients router');
});
router.get('/', (_req, res) => {
    res.send(patientService.getNonSensitivePatients());
});

router.get('/:id', (req, res) => {
    const patient = patientService.findById(req.params.id);

    if (patient) {
        res.send(patient);
    } else {
        res.sendStatus(404);
    }
});

router.post('/', (req, res) => {
    const {
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn } = req.body;
    const newPatient = patientService.addPatient(
    {
        name,
        dateOfBirth,
        gender,
        occupation,
        ssn
    });
    console.log(newPatient);
    res.json(newPatient);
});

export default router;


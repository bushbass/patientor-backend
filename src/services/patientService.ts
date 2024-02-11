import { Patient, NonSensitivePatient , NewPatient} from "../types";
import { v4 as uuid } from 'uuid';

import patientsData from '../../data/patients';

const patients: Patient[] = patientsData;

const getPatients = (): Patient[] => {
    return patients;
};
const getNonSensitivePatients = (): NonSensitivePatient[] => {
    return patients.map(({
        id,
        name,
        dateOfBirth,
        gender,
        occupation, }) => ({
            id,
            name,
            dateOfBirth,
            gender,
            occupation,
        }));
};
const findById = (id: string): Patient | undefined => {
    const entry = patients.find(p => p.id === id);
    return entry;
};

const addPatient = (
   entry: NewPatient):Patient => {

    const newPatient = {
        id:uuid(),
       ...entry
    };

    patients.push(newPatient);
    return newPatient;
};

export default { getPatients, getNonSensitivePatients, findById, addPatient };



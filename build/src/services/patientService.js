"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const patients_1 = __importDefault(require("../../data/patients"));
const patients = patients_1.default;
const getPatients = () => {
    return patients;
};
const getNonSensitivePatients = () => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation, }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation,
    }));
};
const findById = (id) => {
    const entry = patients.find(p => p.id === id);
    return entry;
};
const addPatient = (patient) => {
    const newPatient = Object.assign({ id: (0, uuid_1.v4)() }, patient);
    patients.push(newPatient);
    return newPatient;
};
exports.default = { getPatients, getNonSensitivePatients, findById, addPatient };

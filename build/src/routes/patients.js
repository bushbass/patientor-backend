"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientService_1 = __importDefault(require("../services/patientService"));
const router = express_1.default.Router();
router.get('/ping', (_req, res) => {
    res.send('pong from patients router');
});
router.get('/', (_req, res) => {
    res.send(patientService_1.default.getNonSensitivePatients());
});
exports.default = router;
import express from 'express';
import { getAllCountries } from '../controllers/countriesController';

const router = express.Router();

router.get('/allCountries', getAllCountries);

export default router;
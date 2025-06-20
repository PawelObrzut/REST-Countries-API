import express from 'express';
import { getCountryByName } from '../controllers/countriesController';

const router = express.Router();

router.get('/:name', getCountryByName);

export default router;
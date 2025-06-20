import { Request, Response, NextFunction } from 'express';
import { fetchAllCountries } from '../services/fetchAllCountries';
import { fetchCountryByName } from '../services/fetchCountryByName';

export const getRootMessage = (_req: Request, res: Response) => {
  res.status(200).send({ message: 'resources available at /api/ routes' });
};

export const getAllCountries = async (_req: Request, res: Response, next: NextFunction) => {
  try {
    const payload = await fetchAllCountries();
    res.status(200).send({ payload });
  } catch(error) {
    next(error);
  }
};

export const getCountryByName = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.params;
    const payload = await fetchCountryByName(name);
    res.status(200).send({ payload });
  } catch (error) {
    next(error);
  }
}
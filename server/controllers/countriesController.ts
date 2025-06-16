import { Request, Response, NextFunction } from 'express';
import { fetchAllCountries } from '../services/fetchAllCountries';

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
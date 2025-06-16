import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { CountryServiceError } from '../utils/CountryServiceError'

export const errorHandler: ErrorRequestHandler = (
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof CountryServiceError) {
    res.status(err.statusCode).json({ error: err.message });
    return;
  }
  res.status(500).json({ error: 'Internal Server Error' });
}
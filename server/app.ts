import express from 'express';
import cors from 'cors';
import countriesRoute from './routes/countriesRoutes';
import countryRoute from './routes/countryRoute';
import { getRootMessage } from './controllers/countriesController';
import { errorHandler } from './middleware/errorHandler';
import { CountryServiceError } from './utils/CountryServiceError';

const app = express();
app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

app.get('/', getRootMessage);
app.use('/api', countriesRoute);
app.use('/api', countryRoute);

app.use((_req, _res, next) => {
  const error = new CountryServiceError(404, 'This endpoint is not served');
  next(error);
});

app.use(errorHandler);

export default app
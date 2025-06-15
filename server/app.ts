import express from 'express';
import { fetchAllCountries } from './services/fetchAllCountries'

const app = express();

app.get('/', (_req, res) => {
  res.status(200).send({message: 'resources available at /api/ routes'})
})

app.get('/api/allCountries', async (_req, res) => {
  try {
    const payload = await fetchAllCountries();
    res.status(200).send({payload})
  } catch {
    res.status(500).send({error: 'Error. Server not responding.'})
  }
})

export default app
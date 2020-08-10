import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import routes from './routes';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PROFFY_SERVER_PORT, () => {
  console.log(`[*] Server running on ${process.env.PROFFY_SERVER_PORT}`)
});

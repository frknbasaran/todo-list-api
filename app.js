import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import tasks from './routes/tasks';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({origin: 'http://localhost:3000'}));
app.use('/tasks', tasks);

app.listen(80);

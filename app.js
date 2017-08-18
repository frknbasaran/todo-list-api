import express from 'express';
import bodyParser from 'body-parser';

import tasks from './routes/tasks';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/tasks', tasks);

app.listen(80);

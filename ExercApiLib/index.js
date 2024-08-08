import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import libRouter from './routes/libRouter.js';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/', libRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


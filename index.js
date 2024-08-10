const express = require('express');
const pool = require('./config/db.connection');
const { useJson } = require('./midleware/midleware');
const userRouter = require('./routes/user_router');

const app = express();
const port = 2000;

app.use(useJson)


app.use('/users', userRouter);


app.listen(port, () => {
    console.log(`Server is running on ${port}`)
});
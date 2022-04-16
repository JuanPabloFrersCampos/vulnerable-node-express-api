import express from 'express';

import usersRoutes from './routes/users.js';

//app contains and creates the express application
const app = express();
const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

//New way to process POST requests. bodyParser is deprecated:
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Home page:
app.get('/', (req, res) => {
    res.send('Hello from Homepage');
})

//All requests that are /users, will be redirected to be handled by
//usersRoutes, which is a variable pointing to ./routes/users.js
app.use('/users', usersRoutes);
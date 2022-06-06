import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());


app.get('/',(req,res) =>{
  res.send('Hello from Homepage.')
});


app.use('/users',userRouter)

app.listen(PORT,() => console.log(`Server Running on port: http://localhost:${PORT}`))


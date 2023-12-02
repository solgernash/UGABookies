const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');

const users = require('./routes/api/users');

app.use(cors({origin: true, credentials: true}));
app.use(express.json({extended:false}));

const conn_str = 'mongodb+srv://ethanapplecarroll:fortniteisthebestgame@cluster0.xnydhlh.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
  .then(() => {
    app.listen(port);
    console.log('MongoDB Connection Succeeded...');
  })
  .catch (err => {
    console.log('err');
  });

app.use('/routes/api/users', users);
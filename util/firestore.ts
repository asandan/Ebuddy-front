"use client"

import * as adminConfig from 'firebase-admin';
import * as service from '../ebuddy-426311-88ddef1e2d32.json'
import { cert } from 'firebase-admin/app';

export const initializeDB = () => {
  adminConfig.initializeApp({
    credential: cert(service as adminConfig.ServiceAccount),
    databaseURL: process.env.DATABASE_URL
  });
}

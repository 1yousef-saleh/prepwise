import { initializeApp, getApp, getApps } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDjMD27zH75yElupLqlaL9j2aLJ_hHDcAA",
  authDomain: "prepwise-f896a.firebaseapp.com",
  projectId: "prepwise-f896a",
  storageBucket: "prepwise-f896a.firebasestorage.app",
  messagingSenderId: "495431588579",
  appId: "1:495431588579:web:128c8a888ed2068c6643d6",
  measurementId: "G-ZMJ7CLY7NN"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
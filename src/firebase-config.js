import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyDy2Y61yfxHSJxV2rhj7GjDhTuXxANNwC0",
  authDomain: "fly-back-d30e6.firebaseapp.com",
  databaseURL: "https://fly-back-d30e6-default-rtdb.firebaseio.com",
  projectId: "fly-back-d30e6",
  storageBucket: "fly-back-d30e6.appspot.com",
  messagingSenderId: "720892184622",
  appId: "1:720892184622:web:9421da62636291ca5d77bf"
};

export const app = initializeApp(firebaseConfig)

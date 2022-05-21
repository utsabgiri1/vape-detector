import firebase from 'firebase';

  const firebaseConfig = {
    apiKey: "AIzaSyBCQcCfk_I2vncDR-8wdr_BhSdNuU-P7us",
    authDomain: "vape-sensor.firebaseapp.com",
    databaseURL:"https://vape-sensor-default-rtdb.firebaseio.com/",
    projectId: "vape-sensor",
    storageBucket: "vape-sensor.appspot.com",
    messagingSenderId: "188511627406",
    appId: "1:188511627406:web:5f0ed157c139e292ad41df"
  };

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()
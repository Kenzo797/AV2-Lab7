// <script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from 'firebase/app';
  import { getAuth } from 'firebase/auth';
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB33_sl73TvTdsriwvOXr1QOQ00hOfZWtI",
    authDomain: "teste-62e5a.firebaseapp.com",
    projectId: "teste-62e5a",
    storageBucket: "teste-62e5a.appspot.com",
    messagingSenderId: "634348425519",
    appId: "1:634348425519:web:4a1c9c47635191fd0711da",
    measurementId: "G-B6BW01GB1T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth()
  // const analytics = getAnalytics(app);
// </script>
import firebase from 'firebase';


<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCwVq7DACYT6aPhJ6qtKoovtoGFVdKc-ZQ",
    authDomain: "vurger-queen-react.firebaseapp.com",
    databaseURL: "https://vurger-queen-react.firebaseio.com",
    projectId: "vurger-queen-react",
    storageBucket: "",
    messagingSenderId: "527612899282",
    appId: "1:527612899282:web:3c68c2d5c9a52da665a20b",
    measurementId: "G-MJ82GYNHNC"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

const menuData = firebaseApp.firestore(); //creando la variable de la base de datos del menu 
   
export { menuData} //exportando la base de datos de firebase 
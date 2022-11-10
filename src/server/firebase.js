import app from 'firebase/app';
import 'firebase/auth';
import * as firebaseui from 'firebaseui';


// Configuracion de Firabase
const firebaseConfig = {
    apiKey: "AIzaSyDWMbr8S7FnbLjbyKxB-RWZjp_Ew9o9VfE",
    authDomain: "basedatoscarritos.firebaseapp.com",
    projectId: "basedatoscarritos",
    storageBucket: "basedatoscarritos.appspot.com",
    messagingSenderId: "613371957334",
    appId: "1:613371957334:web:df14c9b503be68a686ebf7",
    measurementId: "G-9G57PLLDP9"
  };
// Constructor que me ayuda a inicializar propiedades de la clase
class Firebase {
    constructor(){
        app.initializeApp(firebaseConfig); //Lamada al metodo de configuracion del firebase(Arranca la conexion entre reac y firebase)
        this.auth = app.auth(); // Indicar que funcionalidades va trabajar metodo Auth
        this.autorization = app.auth; //  Metodo a capturar el objet Auth desde el firebase
        this.firebaseui = new firebaseui.auth.AuthUI(app.auth) // Manejador de interfaces graficas de Firebase y se inicializa dentro del metodo Auth


    }
}

export default Firebase;
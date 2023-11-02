import {busqueda} from "../selectores.js";
import {searchMovies} from "../funciones.js";

class App{
    constructor(){
        this.iniApp();
    
    }

    iniApp(){
        busqueda.addEventListener('input', searchMovies);
    }
}

export default App;
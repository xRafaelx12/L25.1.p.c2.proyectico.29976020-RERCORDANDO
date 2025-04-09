import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_controlador from "./Cl_controlador.js";

export default class principal{
    constructor(){
        let model= new Cl_mTienda(),
        view = new Cl_vTienda(),
        controller= new Cl_controlador(model,view)
        view.controller= controller
    }
}
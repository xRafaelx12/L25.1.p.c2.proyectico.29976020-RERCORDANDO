import Cl_mFotografia from "./Cl_mFotografia.js";
import Cl_mVideo from "./Cl_mVideo.js";
import Cl_mTienda from "./Cl_mTienda.js";
import Cl_vTienda from "./Cl_vTienda.js";
import Cl_vCliente from "./Cl_vCliente.js";
import Cl_vVideo from "./Cl_vVideo.js";
import Cl_vFotografia from "./Cl_vFotrografia.js";
import Cl_controlador from "./Cl_controlador.js";

export default class principal{
    constructor(){
        let model= new Cl_mTienda(),
        view = new Cl_vTienda(),
        controller= new Cl_controlador(model,view)
        view.controller= controller
    }
}
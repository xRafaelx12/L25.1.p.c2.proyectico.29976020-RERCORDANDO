import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_mFotografia extends Cl_mCliente{
    constructor(codigo,costo,tipoFoto){
     super(codigo,costo)
     this.tipoFoto=tipoFoto

    }

    set tipoFoto(tipoFoto){
        this._tipoFoto=+tipoFoto
    }

    get tipoFoto(){
        return this._tipoFoto
    }

    descuento(){
        if(this.tipoFoto===1){
            return this.costo*0.18
        }else{
            return 0
        }
    }
    
    incremento(){
        if(this.tipoFoto===2){
            return this.costo*0.13
        }
    }


    totalPayedByClientes(){
        return (this.costo+this.incremento())-this.descuento() 
    }




}
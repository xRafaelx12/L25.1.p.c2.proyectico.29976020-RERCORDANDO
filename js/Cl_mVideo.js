import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_mVideo extends Cl_mCliente{

    constructor(codigo,costo,hd){
        super(codigo,costo)
        this.hd=hd
 
    }

    set hd(hd){
        this._hd = String(hd).trim().toUpperCase();
    }

    get hd(){
        return this._hd
    }

    calculatedIncrease(){
        if(this.hd ==="SI"){
            return this.costo*0.20
        }else{
            return 0
        }
    }

    totalPayedByClientes(){
        return this.costo+this.calculatedIncrease()
    }


}
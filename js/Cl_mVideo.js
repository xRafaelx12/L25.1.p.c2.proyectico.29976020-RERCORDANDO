import Cl_mCliente from "./Cl_mCliente.js";

export default class Cl_mVideo extends Cl_mCliente{
    //we use inheritance to save some of time 
    constructor(codigo,costo,hd){
        super(codigo,costo)
        this.hd=hd
 
    }

    // set and get to establized all the properties and use some methods on them
    set hd(hd){
        this._hd = String(hd).trim().toUpperCase();
    }

    get hd(){
        return this._hd
    }


    //method to calculate the increase if is HD
    calculatedIncrease(){
        if(this.hd ==="SI"){
            return this.costo*0.20
        }else{
            return 0
        }
    }

    // method to know how mucho gonna pay our client
    totalPayedByClientes(){
        return this.costo+this.calculatedIncrease()
    }


}
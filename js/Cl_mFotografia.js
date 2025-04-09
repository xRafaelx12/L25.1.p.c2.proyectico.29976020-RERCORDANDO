import Cl_mCliente from "./Cl_mCliente.js";
export default class Cl_mFotografia extends Cl_mCliente{

    //we use inheritance to save some of time 
    constructor(codigo,costo,tipoFoto){
     super(codigo,costo)
     this.tipoFoto=tipoFoto

    }


     // set and get to establized all the properties and use some methods on them
    set tipoFoto(tipoFoto){
        this._tipoFoto=String(tipoFoto).trim().toUpperCase()
    }

    get tipoFoto(){
        return this._tipoFoto
    }


    // metohd to calculate the percetange of discount than can get our clients 
    descuento(){
        if(this.tipoFoto==="D"){
            return (this.costo*0.18)
        }else{
            return 0
        }
    }
    
    // metohd to calculate the percetange of increase than can get our clients 
    incremento(){
        if(this.tipoFoto==="I"){
            return (this.costo*0.13)
        }else{
            return 0
        }
    }

    // method to calculate how much gonna pay our client for our servicies 
    totalPayedByClientes(){
        return ((this.costo+this.incremento())-this.descuento())
    }




}
export default class Cl_mCliente{
    constructor(codigo,costo){
        //properties
        this.codigo=codigo
        this.costo=costo
    }

    //set and get to establized all 
    set codigo(codigo){
        this._codigo=+codigo
    }

    get codigo(){
        return this._codigo
    }

    set costo(costo){
        this._costo=+costo
    }

    get costo(){
        return this._costo
    }



}
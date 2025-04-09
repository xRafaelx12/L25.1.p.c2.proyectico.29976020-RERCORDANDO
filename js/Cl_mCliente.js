export default class Cl_mCliente{
    constructor(codigo,costo){
        this.codigo=codigo
        this.costo=costo
    }

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
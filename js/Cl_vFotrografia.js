import Cl_mFotografia from "./Cl_mFotografia.js";

export default class Cl_vFotografia{
    constructor(){
        this.controller=null
        this.inCodigo=document.getElementById("inCodigo1")
        this.inCosto=document.getElementById("inCosto1")
        this.tabla1=document.getElementById("tabla1op")
        this.tabla2=document.getElementById("tabla2op")
        this.tabla3=document.getElementById("tabla3op")
        this.tabla4=document.getElementById("tabla4op")
        this.tabla5=document.getElementById("tabla5op")
        this.tabla6=document.getElementById("tabla6op")
        this.opTotal=document.getElementById("opTotal")
        this.btProcessData=document.getElementById("btProcesarDataPhotografi")
        this.inTipoFotogracia=document.getElementById("inTipoFotografia")

        this.instanceVFotograica= new Cl_vFotografia()
        this.instanceVFotograica.btProcessData.onclick = () => this.controller.processDataAndAddFotografia()
    }

    get incodicoExtractValue(){
        return this.inCodigo.value
    }

    get inCostoExtractValue(){
        return this.inCosto.value
    }

    get inTipoFotograciaExtractValue(){
        return this.inTipoFotogracia.value
    }

    processModelFotografia(){
        this.iModelFotografia= new Cl_mFotografia(this.instanceVFotograica.incodicoExtractValue,this.instanceVFotograica.inCostoExtractValue,this.instanceVFotograica.inTipoFotograciaExtractValue)
        return this.iModelFotografia 
    }


    reportHtmlFotografia(total){
        
        this.tabla1.innerHTML+=`<tr>
        <td>${this.iModelFotografia.codigo}</td>
        </tr>`

        this.tabla2.innerHTML+=`<tr>
        <td>${this.iModelFotografia.costo}</td>
        </tr>`

        this.tabla3.innerHTML+=`<tr>
        <td>${this.iModelFotografia.tipoFoto}</td>
        </tr>`

        this.tabla4.innerHTML+=`<tr>
        <td>${this.iModelFotografia.descuento()}</td>
        </tr>`

        this.tabla5.innerHTML+=`<tr>
        <td>${this.iModelFotografia.incremento()}</td>
        </tr>`

        this.tabla6.innerHTML+=`<tr>
        <td>${this.iModelFotografia.preciototal()}</td>
        </tr>`

        this.opTotal.innerHTML=total
        


    }

}
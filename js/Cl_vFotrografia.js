
export default class Cl_vFotografia{
    constructor(){
        //   properties to conect the html with the java script 
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

        
    }

        // get to extract the value of the boxed in the html 
    get incodigoExtractValue(){
        return this.inCodigo.value
    }

    get inCostoExtractValue(){
        return this.inCosto.value
    }

    get inTipoFotograciaExtractValue(){
        return this.inTipoFotogracia.value
    }

    

}
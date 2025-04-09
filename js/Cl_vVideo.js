import Cl_mVideo from "./Cl_mVideo.js";

export default class Cl_vVideo{

    constructor(){
         //   properties to conect the html with the java script 
        this.inCodigo=document.getElementById("inCodigo2")
        this.inCosto=document.getElementById("inCosto2")        
        this.tabla1=document.getElementById("tablaop1")
        this.tabla2=document.getElementById("tablaop2")
        this.tabla3=document.getElementById("tablaop3")
        this.tabla4=document.getElementById("tablaop4")
        this.tabla5=document.getElementById("tablaop5")
        this.btProcessDataInVideo=document.getElementById("btProcessDataInVideo")
        this.opTotal=document.getElementById("opTotal2")
        this.inHd=document.getElementById("inHd")

        
    }

// get to extract the value of the boxed in the html 
    get incodigoExtractValue(){
        return this.inCodigo.value
    }

    get inCostoExtractValue(){
        return this.inCosto.value
    }

    get inHdExtractValue(){
        return this.inHd.value
    }





}
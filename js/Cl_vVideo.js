import Cl_mVideo from "./Cl_mVideo.js";
import Cl_vCliente from "./Cl_vCliente.js";
export default class Cl_vVideo extends Cl_vCliente{

    constructor(){

        super(inCodigo,inCosto)
        this.controller=null
        this.tabla1=document.getElementById("tablaop1")
        this.tabla2=document.getElementById("tablaop2")
        this.tabla3=document.getElementById("tablaop3")
        this.tabla4=document.getElementById("tablaop4")
        this.tabla5=document.getElementById("tablaop5")
        this.btProcessDataInVideo=document.getElementById("btProcessDataInVideo")
        this.opTotal=document.getElementById("opTotal2")
        this.inHd=document.getElementById("inHd")
        
        this.btProcessDataInVideo.onclick = ()=>this.controller.processDataAndAdddVideo()
    }

    get inHdExtractValue(){
        return this.inHd.value
    }

    processModelVideo(){
        this.instanceModelVideo= new Cl_mVideo(this.inCodigo.value,this.inCosto.value,this.hd.value)
        return this.instanceModelVideo
    }

    reportHtmlVideo(total){

        this.tabla1.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.codigo}</td>
        </tr>`

        this.tabla2.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.costo}</td>
        </tr>`

        this.tabla3.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.hd}</td>
        </tr>`

        this.tabla4.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.calculatedIncrease()}</td>
        </tr>`

        this.tabla5.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.totalPayedByClientes()}</td>
        </tr>`



        this.opTotal.innerHTML=total
    }



}
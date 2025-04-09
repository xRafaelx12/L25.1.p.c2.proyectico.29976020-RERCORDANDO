import Cl_vVideo from "./Cl_vVideo.js"
import Cl_mVideo from "./Cl_mVideo.js";
import Cl_mFotografia from "./Cl_mFotografia.js";
import Cl_vFotografia from "./Cl_vFotrografia.js";

export default class Cl_vTienda{
    constructor(){

        // properties to concect java script with html and send the data to the model 
        this.controller=null
        this.opTotalSelled=document.getElementById("opTotalSelled")
        this.opNumberDigitalPicture=document.getElementById("opNumberDigitalPicture")
        this.opSubTotalDigitalPicture=document.getElementById("opSubTotalDigitalPicture")
        this.opAverageSelledDigitalPicture=document.getElementById("opAverageSelledDigitalPicture")

        this.instanceViewVIdeo= new Cl_vVideo()
        this.instanceViewVIdeo.btProcessDataInVideo.onclick = ()=>this.controller.processDataAndAddVideo()


        this.instanceVPhotografi= new Cl_vFotografia()
        this.instanceVPhotografi.btProcessData.onclick = () => this.controller.processDataAndAddFotografia()

    }


    //methods to process send the data to the model  video 
    processModelVideo(){
        this.instanceModelVideo= new Cl_mVideo(this.instanceViewVIdeo.incodigoExtractValue,this.instanceViewVIdeo.inCostoExtractValue,this.instanceViewVIdeo.inHdExtractValue)
        return this.instanceModelVideo
    }

    // metohod to show the report of the video in the html 
    reportHtmlVideo(total){

        this.instanceViewVIdeo.tabla1.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.codigo}</td>
        </tr>`

        this.instanceViewVIdeo.tabla2.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.costo}</td>
        </tr>`

        this.instanceViewVIdeo.tabla3.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.hd}</td>
        </tr>`

        this.instanceViewVIdeo.tabla4.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.calculatedIncrease()}</td>
        </tr>`

        this.instanceViewVIdeo.tabla5.innerHTML+=`<tr>
        <td>${this.instanceModelVideo.totalPayedByClientes()}</td>
        </tr>`



        this.instanceViewVIdeo.opTotal.innerHTML=total
    }




    //methods to process the data of of the view photografic and send it to the model xd
    processModelFotografia(){
        this.iModelFotografia= new Cl_mFotografia(this.instanceVPhotografi.incodigoExtractValue,this.instanceVPhotografi.inCostoExtractValue,this.instanceVPhotografi.inTipoFotograciaExtractValue)
        return this.iModelFotografia 
    }

    // method to show the data of photografic in the html 
    reportHtmlFotografia(total){
        
        this.instanceVPhotografi.tabla1.innerHTML+=`<tr>
        <td>${this.iModelFotografia.codigo}</td>
        </tr>`

        this.instanceVPhotografi.tabla2.innerHTML+=`<tr>
        <td>${this.iModelFotografia.costo}</td>
        </tr>`

        this.instanceVPhotografi.tabla3.innerHTML+=`<tr>
        <td>${this.iModelFotografia.tipoFoto}</td>
        </tr>`

        this.instanceVPhotografi.tabla4.innerHTML+=`<tr>
        <td>${this.iModelFotografia.descuento()}</td>
        </tr>`

        this.instanceVPhotografi.tabla5.innerHTML+=`<tr>
        <td>${this.iModelFotografia.incremento()}</td>
        </tr>`

        this.instanceVPhotografi.tabla6.innerHTML+=`<tr>
        <td>${this.iModelFotografia.totalPayedByClientes()}</td>
        </tr>`

        this.instanceVPhotografi.opTotal.innerHTML=total
        


    }




    // method to report our last requiriment 
    reportHtml(totalVendido,numberDigitalPicture,subTotalDigitalPicture,avaregeDigitalSells){

        this.opTotalSelled.innerHTML=totalVendido
        this.opNumberDigitalPicture.innerHTML=numberDigitalPicture
        this.opSubTotalDigitalPicture.innerHTML=subTotalDigitalPicture
        this.opAverageSelledDigitalPicture.innerHTML=avaregeDigitalSells
    }
}
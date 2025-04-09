export default class Cl_vTienda{
    constructor(){
        this.opTotalSelled=document.getElementById("opTotalSelled")
        this.opNumberDigitalPicture=document.getElementById("opNumberDigitalPicture")
        this.opSubTotalDigitalPicture=document.getElementById("opSubTotalDigitalPicture")
        this.opAverageSelledDigitalPicture=document.getElementById("opAverageSelledDigitalPicture")
    }
    
    reportHtml(totalVendido,numberDigitalPicture,subTotalDigitalPicture,avaregeDigitalSells){

        this.opTotalSelled.innerHTML=totalVendido
        this.opNumberDigitalPicture.innerHTML=numberDigitalPicture
        this.opSubTotalDigitalPicture.innerHTML=subTotalDigitalPicture
        this.opAverageSelledDigitalPicture.innerHTML=avaregeDigitalSells
    }
}
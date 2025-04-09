export default class Cl_vCliente{
    constructor(){
        // proerties to conect the html with the javascript
        this.inCodigo=document.getElementById("inCodigo")
        this.inCosto=document.getElementById("inCosto")
        
    }


    //methods to ectract the data from the html 
    get incodicoExtractValue(){
        return this.inCodigo.value
    }

    get inCostoExtractValue(){
        return this.inCosto.value
    }
    //methods to ectract the data from the html 
}
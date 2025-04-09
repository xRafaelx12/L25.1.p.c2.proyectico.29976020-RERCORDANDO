export default class Cl_mTienda{
    constructor(){
        this.counterTotalPhotografi=0
        this.counterTotalVideo=0
        this.TotalStore=0
        this.counterDigitalPicture=0
        this.subTotalDigitalPicture=0
        this.AvaregeDigitalSells=0
    }

    //METHOD TO PROCESS  IN THE MODEL PHOTOGRAFI
    processAndSaveDataInFotografia(fotografia){
        this.counterTotalPhotografi+=this.fotografia.totalPayedByClientes()
        if(fotografia.tipoFoto===1){
            this.counterDigitalPicture++
        }

        if(fotografia.tipoFoto===1){
            this.subTotalDigitalPicture+=fotografia.totalPayedByClientes()
        }

        
    }


        //METHOD TO PROCESS IN THE MODEL VIDEO
    processAndSaveDataInVideo(video){
        this.counterTotalVideo+=video,totalPayedByClientes()
    }





    
    //METHODS TO SHOW THE DATA 


    //SHOW ALL THE TOTAL PAYED BY CLIENTS ACCORDING TO SERVICES
    methodToshowTotalVideo(){
        return this.counterTotalVideo
    }

    methodToshowTotalPhotografi(){
        return this.counterTotalPhotografi
    }
    //SHOW ALL THE TOTAL PAYED BY CLIENTS ACCORDING TO SERVICES 





    methodToshowTotalSells(){
        return this.counterDigitalPicture
    }

    methodToShowNumberDigitalsPicture(){
        return this.counterDigitalPicture
    }

    methodToShowSubTotalDigitalPictures(){
        return this.subTotalDigitalPicture
    }

    methodToShowAvarageDigitalSells(){
        return this.AvaregeDigitalSells
    }
    
    //METHODS TO SHOW THE DATA 
}
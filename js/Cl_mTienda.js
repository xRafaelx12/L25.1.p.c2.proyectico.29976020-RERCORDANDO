export default class Cl_mTienda{
    constructor(){
        // properties to save important information 
        this.counterTotalPhotografi=0
        this.counterTotalVideo=0
        this.TotalStore=0
        this.counterDigitalPicture=0
        this.subTotalDigitalPicture=0
        this.counterKindOfPicture=0
    }

    //METHOD TO PROCESS  IN THE MODEL PHOTOGRAFI
    processAndSaveDataInFotografia(fotografia){
        this.counterTotalPhotografi+=fotografia.totalPayedByClientes()
        this.counterKindOfPicture++

        if(fotografia.tipoFoto==="D"){
            this.counterDigitalPicture++
            this.subTotalDigitalPicture+=fotografia.totalPayedByClientes()
        }



        
    }


        //METHOD TO PROCESS IN THE MODEL VIDEO
    processAndSaveDataInVideo(video){
        this.counterTotalVideo+=video.totalPayedByClientes()
    }





    
    //METHODS TO SHOW THE DATA 


    //SHOW ALL THE TOTAL PAYED BY CLIENTS ACCORDING TO SERVICES
    methodToshowTotalVideo(){
        return (this.counterTotalVideo)
    }

    methodToshowTotalPhotografi(){
        return (this.counterTotalPhotografi)
    }
    //SHOW ALL THE TOTAL PAYED BY CLIENTS ACCORDING TO SERVICES 





    methodToshowTotalSells(){
        return (this.methodToshowTotalVideo()+this.methodToshowTotalPhotografi())
    }

    methodToShowNumberDigitalsPicture(){
        return (this.counterDigitalPicture)
    }

    methodToShowSubTotalDigitalPictures(){
        return (this.subTotalDigitalPicture).toFixed(2)
    }

    methodToShowAvarageDigitalSells(){
        return (this.subTotalDigitalPicture/this.counterKindOfPicture).toFixed(2)
    }
    
    //METHODS TO SHOW THE DATA 
}
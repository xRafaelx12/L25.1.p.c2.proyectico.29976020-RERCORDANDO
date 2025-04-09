export default class Cl_controlador{
    constructor(model,view){
        this.model=model
        this.view=view
    }

    // method to uptdated all the data and saved in our properties 
    processDataAndAddFotografia(){
        this.model.processAndSaveDataInFotografia(this.view.processModelFotografia())
        this.view.reportHtmlFotografia(this.model.methodToshowTotalPhotografi())
        this.view.reportHtml((this.model.methodToshowTotalSells().toFixed(2)),this.model.methodToShowNumberDigitalsPicture(),this.model.methodToShowSubTotalDigitalPictures(),this.model.methodToShowAvarageDigitalSells())
    }


    // method to uptdated all the data and saved in our properties 
    processDataAndAddVideo(){
        this.model.processAndSaveDataInVideo(this.view.processModelVideo())
        this.view.reportHtmlVideo(this.model.methodToshowTotalVideo())
        this.view.reportHtml((this.model.methodToshowTotalSells().toFixed(2)),this.model.methodToShowNumberDigitalsPicture(),this.model.methodToShowSubTotalDigitalPictures(),this.model.methodToShowAvarageDigitalSells())
    }
    

}
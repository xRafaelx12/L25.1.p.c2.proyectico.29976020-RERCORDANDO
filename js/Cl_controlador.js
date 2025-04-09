export default class Cl_controlador{
    constructor(model,view){
        this.model=model
        this.view=view
    }


    processDataAndAddFotografia(){
        this.model.processAndSaveDataInFotografia(this.view.processModelFotografia())
        this.view.reportHtmlFotografia(this.model.methodToshowTotalPhotografi())
    }


    processDataAndAddVideo(){
        this.model.processAndSaveDataInVideo(this.view.processModelVideo())
        this.view.reportHtmlVideo(this.model.methodToshowTotalVideo())
    }
    

}
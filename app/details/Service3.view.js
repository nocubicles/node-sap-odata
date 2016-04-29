sap.ui.jsview("app.details.Service3", {

    getControllerName : function() {
		return "app.details.Service3";
    },
	/**
	 * Handler to onBeforeShow event that fires by the NavContainer.<BR>
	 * Note: If the view is already loaded and the bindingContext was changed, this method also called by the App.contoller
	 * @param oEvent
	 */
    onBeforeShow : function(oEvent) {
		this.getController().onBeforeShow(oEvent.data);
    },

    createContent : function(oController) {
		this.oList = new sap.m.List({
	    	inset: true,
	    	items : [
				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_AUTHOR"), value : "{Author}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_DESCRIPTION"), value : "{Description}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_ID"), value : "{ID}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_IMAGEURL"), value : "{ImageUrl}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_METADATAURL"), value : "{MetadataUrl}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_SERVICEURL"), value : "{ServiceUrl}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_TECHNICALSERVICENAME"), value : "{TechnicalServiceName}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_TECHNICALSERVICEVERSION"), value : "{TechnicalServiceVersion}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_TITLE"), value : "{Title}"}),
 				  	  new sap.m.DisplayListItem({ label : oBundle.getText("SERVICE_UPDATEDDATE"), value :{path : "UpdatedDate", formatter : fnDateTimeFormatter}}),
                  	]
		});


		this.page = new sap.m.Page({
	    	title : oBundle.getText("TITLE__SERVICE_DETAIL"),
	    	//set back button on details pages only on smartphones
	    	showNavButton : jQuery.device.is.phone,
	    	navButtonTap : [ oController.onNavButtonTap, oController ],
	    	content : [ this.oList, this.oNavList ]
		});

		// done
		return this.page;
    }
});
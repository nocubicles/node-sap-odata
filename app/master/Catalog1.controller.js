sap.ui.controller("app.master.Catalog1", {

    onInit : function(oEvent) {
    	this.loadContent();
    },  
    
    onBeforeShow : function(oData) {
        
        var view = this.getView();
        var newValue = view.searchField.getValue();
		if (newValue){
			// in case we navigate back to this view and search was performed, 
			//we executes client side search with the inserted value
	    	this.onLiveChange({
				getParameters : function() {
		    		return { newValue : newValue };
		    	}
	        });
	    }

    },
    
    loadContent: function(){
    	var view = this.getView();
    	view.oList.bindItems("/CatalogCollection",view.itemTemplate);   	 
     
	},    
	
	onPersonalizationButtonTap : function() {

    	//On tablet,we set the details section to empty when navigating to the personalization list
        if (!jQuery.device.is.phone) {
    	var splitApp = sap.ui.getCore().byId("app.App").splitApp;
    		splitApp.toDetail("app.details.Empty");
        }
        sap.ui.getCore().getEventBus().publish("nav", "to", {
    		viewId : "app.master.SettingsCategories",
    		data : ""
        });

    },
    

    onListItemTap : function(oEvent) {
		var oBindingContext = oEvent.oSource.getBindingContext();

		sap.ui.getCore().getEventBus().publish("nav", "to", {
	    	viewId : "app.master.Service2",
	    	data : { bindingContext : oBindingContext }
		});
    },
    onLiveChange : function(oEvent) {
		jQuery.sap.require("util.Utility");
		search(this.getView(), oEvent.getParameters().newValue);
    },
    
    onPull : function(oEvent, oController){
		oController.loadContent(oController.oBindingContext);
		this.hide();
    },

});
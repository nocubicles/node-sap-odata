sap.ui.jsview("app.master.Catalog1", {

	getControllerName : function() {
		return "app.master.Catalog1";
	},
	/**
	 * Handler to onBeforeShow event that fires by the NavContainer.<BR>
	 * @param oEvent
	 */
	onBeforeShow : function(oEvent) {
		this.getController().onBeforeShow(oEvent.data);
    },

	createContent : function(oController) {

		this.oList = new sap.m.List();

		this.itemTemplate = new sap.m.CustomListItem({
			type : "Navigation",
			tap : oController.onListItemTap,
			content : [ new sap.m.VBox({
				items : [
					  	  new sap.m.Label({ text :  "{ID}" , design : "Bold"}),
					  	  new sap.m.Label({ text :  "{Description}" }),
					  	  new sap.m.Label({ text :  "{Title}" }),
                    	]
           		}).addStyleClass("mobile-list-item")
           	]
		});
		
	// create search field
	this.searchField = new sap.m.SearchField({
	    placeholder : oBundle.getText("SEARCH_PLACEHOLDER"),
	    layoutData : new sap.m.FlexItemData({ growFactor : 1 }),
	    liveChange : [ oController.onLiveChange, oController ],
	    maxLength  : 127,
	});
	
	var pull = new sap.m.PullToRefresh({
	    description : "",
	    refresh : [oController, oController.onPull]
	});	
	
	//Create personalization button
	var oButton = new sap.m.Button({
	    icon: "sap-icon://settings",
	    tap : oController.onPersonalizationButtonTap,
	    visible: !jQuery.device.is.desktop
	});
	

	this.page = new sap.m.Page({
   	    title : oBundle.getText("TITLE__SERVICE_CATALOG"),
	    showNavButton : false,
	    footer : new sap.m.Bar({
			enableFlexBox : true,
			contentRight : [ oButton  ]
		}),	    content : [ pull, new sap.m.Bar({	
	    				enableFlexBox : true, 
	    				contentMiddle : [ this.searchField ] 
	    				}), 
	    			this.oList ]
	});

		// done
		return this.page;
	}
	
});
jQuery.sap.declare("Authentication.Authentication");
sap.ui.localResources("util");
jQuery.sap.require("util.Utility");

function authenticate(){
    	authenticateBasic();
    	//authenticateSAML();
    	//authenticatePortalSSO();
    	//authenticateForm();
}

function authenticateBasic(){
    launchApplication();
}

function authenticateSAML(){
    jQuery.sap.require("Authentication.SAMLAuthentication");
    executeSAMLAuthentication();
}

function authenticatePortalSSO(){
    jQuery.sap.require("Authentication.PortalSSOAuthentication");
    executePortalSSOAuthentication();
}

function authenticateForm() {
	jQuery.sap.require("Authentication.FormAuthentication");
	executeFormAuthentication();
}

function launchApplication(){
	jQuery.sap.registerModulePath('Application', 'Application');
	// launch application
	jQuery.sap.require("Application");

	new Application({
		root : "content"
	});
}

function executeAjaxCall(type, url, data, oHeaders, successFunc, errorFunc){
    errorFuncDefault = (typeof errorFunc === "undefined") ? errorHandling : errorFunc;
	jQuery.ajax({
	        type: type,
	        url: url,
	        data: data,
	        headers: oHeaders,
	        success: successFunc,
	        error: errorFuncDefault
	});
}

function errorHandling(oData, textStatus, error){
	
	 displayError({
			message : error,
			responseText : oData.responseText,
			statusCode : oData.status,
			statusText : oData.statusText
		    });	

}
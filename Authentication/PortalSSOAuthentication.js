jQuery.sap.declare("Authentication.PortalSSOAuthentication");

//Change sPortalURL to your portal url
var sPortalURL = "/irj/portal";
function executePortalSSOAuthentication() {
    executeAjaxCall("GET", sPortalURL, null, null, launchApplication);
};


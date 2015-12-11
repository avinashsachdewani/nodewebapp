var soql = document.getElementById("soql");
var result = document.getElementById("result");
var clientId = '3MVG9ZL0ppGP5UrAwfCbF8hL72kJ2NkTlB8NcnZmmSssKJseAcBpSnsD_46TgcduDjr.dhRrIQSWE_ksIWs67',
    loginUrl = 'https://login.salesforce.com/',
    redirectURI = 'https://mw-ms-thehubwebapp.azurewebsites.net/oauthcallback.html',
    client = new forcetk.Client(clientId, loginUrl);
function loginDialogCallback(response) {
    if (response && response.access_token) {
        client.setSessionToken(response.access_token, null, response.instance_url);
    } else {
        alert("Authentication Error: No Token");
    }
}

document.getElementById("queryBtn").addEventListener("click", function () {
    client.query(soql.value,
        function (data) {
            result.innerHTML = JSON.stringify(data, undefined, 3);
        },
        function (error) {
            alert("Error: " + JSON.stringify(error));
        });
}, false);

force.login();
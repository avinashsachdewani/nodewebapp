var soql = document.getElementById("soql");
var result = document.getElementById("result");
var clientId = 'YOUR_CONSUMER_KEY_HERE',
    loginUrl = 'https://login.salesforce.com/',
    redirectURI = 'http://localhost:3000/oauthcallback.html',
    proxyURL = 'http://localhost:3000/proxy/',
    client = new forcetk.Client(clientId, loginUrl, proxyURL);
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
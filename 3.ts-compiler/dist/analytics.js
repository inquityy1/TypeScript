"use strict";
let logged;
function sendAnalytics(data) {
    console.log("Sending data...");
    logged = true;
}
sendAnalytics("The data");

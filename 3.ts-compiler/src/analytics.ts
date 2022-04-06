let logged;

function sendAnalytics(data: string) {
  console.log("Sending data...");
  logged = true;
}

sendAnalytics("The data");

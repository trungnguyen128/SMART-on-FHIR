const express = require("express");
const fhirClient = require("fhirclient");

const PORT = process.env.PORT || 3001;

const app = express();

// ToDo: Not sure, this api url is appropriate for this testing.
app.get("/patients", (req, res) => {
  const client = fhirClient(req, res).client({
    serverUrl: "https://r4.smarthealthit.org",
  });
  client.request("Patient", { pageLimit: 1 }).then((result) => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

/*
CROSS PLATFORM LIGHTWEIGHT CDO REQUESTS
ABICAMS HAD A WAY BEFORE THOUGH I GUESS IT CHANGED THIS IS
MORE OF AN UPGRADE 1 INSTEAD OF 2 REQUESTS
*/
const express = require("express");
const app = express();
const axios = require("axios");
const jimpify = require("./image");
app.get("/", (req, res) => {
  res.status(200).send("hi");
});
app.get("/request", (req, res) => {
  let data = JSON.parse(req.query["data"].replaceAll('\\"', '"'));
  let sendData = {
    method: data.Method,
    url: data.Url,
  };
  if (data.Body) {
    sendData.data = JSON.stringify(data.Body);
  }
  if (data.Headers) {
    sendData.headers = data.Headers;
  }
  axios(sendData)
    .then(async (response) => {
      res.set("Content-Type", "image/png");
      res.status(200).send(
        await jimpify.renderImage({
          data:
            typeof response.data !== "string"
              ? JSON.stringify(response.data)
              : response.data,
          status: response.status,
        }),
      );
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(process.env.port || 2090, () => {
  console.log("ready");
});

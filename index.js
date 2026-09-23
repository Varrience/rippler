/*
CROSS PLATFORM LIGHTWEIGHT CDO REQUESTS
ABICAMS HAD A WAY BEFORE THOUGH I GUESS IT CHANGED THIS IS
MORE OF AN UPGRADE 1 INSTEAD OF 2 REQUESTS
*/
const express = require("express");
const cors = require("cors");
const app = express();
const axios = require("axios");
const jimpify = require("./image");
app.use(cors());
app.get("/", (req, res) => {
  res.status(200).send("hi");
});
app.get("/request", (req, res) => {
  const data = JSON.parse(req.query["data"].replaceAll('\\"', '"'));
  const type = data.responseType ? data.responseType : "image/png";
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
      res.set("Content-Type", type);
      let respond = {
        data: typeof response.data !== "string" ? JSON.stringify(response.data): response.data,
        status: response.status,
      };
      res.status(200).send(
        type === "image/png" ? await jimpify.renderImage(respond): respond);
    })
    .catch((error) => {
      console.log(error);
    });
});
app.listen(process.env.port || 2090, () => {
  console.log("ready");
});

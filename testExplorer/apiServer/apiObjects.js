const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = baseUrl; //define global variable

async function getMethod() {
  const response = await request(url).get("/objects/12");
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  console.log(response.body);
}

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Agus Budiman",
      data: {
        Generation: "2024th",
        Price: "10000",
        Capacity: "125 GB",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Agus Budiman");

  console.log(response.body);
}

module.exports = { getMethod, postMethod };

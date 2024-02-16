const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = baseUrl; //define global variable
  

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
//   expect(response.data.Generation).to.equal("2024th");
//   expect(response.data.Price).to.equal("10000");
//   expect(response.data.Capacity).to.equal("125 GB");
  expect(response.body.createdAt).to.not.be.null;
  //simpan id after POST
  const id = response.body.id;
  console.log("id after POST:", id);
  return id; //Return the id
}


async function getMethod(id) {
    const response = await request(url).
    get(`/objects/${id}`)
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    expect(response.body.id).to.equal(id);
    expect(response.body.name).to.equal("Agus Budiman");
    // expect(response.data.Generation).to.equal("2024th");
    // expect(response.data.Price).to.equal("10000");
    // expect(response.data.Capacity).to.equal("125 GB");
    console.log(response.body);
  }
  

async function putMethod(id) {
    const response = await request(url)
      .put(`/objects/${id}`)
      .send({
        name: "Agus Budiman PUT",
        data: {
        Generation: "2024th",
        Price: "10000",
        Capacity: "125 GB",
        // Guarantee: "5 year",
        },
      });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    // expect(response.data.Guarantee).to.equal("5 year");
    expect(response.body.name).to.equal("Agus Budiman PUT");
  }



module.exports = { postMethod, getMethod, putMethod };

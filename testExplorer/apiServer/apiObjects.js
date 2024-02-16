const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = baseUrl; //define global variable
  

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "Maidzola",
      data: {
        Generation: "2",
        Price: "700000",
        Capacity: "1TB",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  expect(response.body.name).to.equal("Maidzola");
  //expect(response.data.Generation).to.equal(2);
  //expect(response.data.Price).to.equal(700000);
  //expect(response.data.Capacity).to.equal("1TB");
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
    expect(response.body.name).to.equal("Maidzola");
    // expect(response.data.Generation).to.equal(2);
    // expect(response.data.Price).to.equal(700000);
    //expect(response.data.Capacity).to.equal("1TB");
    console.log(response.body);
  }
  

async function putMethod(id) {
    const response = await request(url)
      .put(`/objects/${id}`)
      .send({
        name: "Maidzola PUT",
        data: {
          Generation: "2",
          Price: "700000",
          Capacity: "1TB",
          Guarantee: "5",
        },
      });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    expect(response.body.name).to.equal("Maidzola PUT");
    // expect(response.data.Guarantee).to.equal(5);
  }



module.exports = { postMethod, getMethod, putMethod };

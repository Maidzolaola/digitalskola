const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

//const url = supertest("https://restful-api.dev/"); // global variable url
const url = `${baseUrl}`; //define global variable
//test suites
describe("Testing API restful", function () {
  // Test case 1
  it("Test GET", async function () {
    const response = await request(url).get("/objects/12");
    //assertation / verifikasi
    expect(response.status).to.equal(200);
  });
});

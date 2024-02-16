const { postMethod, getMethod, putMethod } = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful 2", function () {
  // Test case 1
  it("Test POST from Function", async function () {
    await postMethod();
  });
  it("Test GET from Function", async function () {
    await getMethod();
  });
  it("Test PUT from Function", async function () {
    await putMethod();
  });
});

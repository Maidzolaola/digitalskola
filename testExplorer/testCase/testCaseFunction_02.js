const { getMethod, postMethod } = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful", function () {
  // Test case 1
  it("Test GET from Function", async function () {
    await getMethod();
  });
  it("Test POST from Function", async function () {
    await postMethod();
  });
});

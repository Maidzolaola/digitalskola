const { postMethod, getMethod, putMethod } = require("../apiServer/apiObjects");

//test suites
describe("Testing API restful 2", function () {
    let id;
  // Test case Function 02
  it("Test POST from Function", async function () {
    id = await postMethod();
  });
  it("Test GET from Function", async function () {
    await getMethod(id);
  });
  it("Test PUT from Function", async function () {
    await putMethod(id);
  });
});

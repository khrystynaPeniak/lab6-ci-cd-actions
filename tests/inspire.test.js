const assert = require("assert");
const { getRandomQuote } = require("../src/inspire.js");

describe("getRandomQuote", () => {
  it("should return a non-empty string", () => {
    const result = getRandomQuote();
    assert.ok(typeof result === "string" && result.length > 0);
  });
});

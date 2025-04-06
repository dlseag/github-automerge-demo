const {
  performCalculation,
  add,
  subtract,
  multiply,
  divide,
} = require("./index");

describe("Basic operations", () => {
  test("adds correctly", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("subtracts correctly", () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test("multiplies correctly", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("divides correctly", () => {
    expect(divide(6, 3)).toBe(2);
  });

  test("throws when dividing by zero", () => {
    expect(() => divide(6, 0)).toThrow("Division by zero");
  });
});

describe("Long running tests", () => {
  // These tests will take some time to complete

  test("performs lengthy calculation 1", async () => {
    const result = await performCalculation(5000);
    expect(result).toBeGreaterThan(0);
  }, 60000); // 60 second timeout

  test("performs lengthy calculation 2", async () => {
    const result = await performCalculation(3000);
    expect(result).toBeGreaterThan(0);
  }, 40000); // 40 second timeout
});

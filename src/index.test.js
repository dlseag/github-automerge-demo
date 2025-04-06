const {
  performCalculation,
  longRunningTask,
  processFiles,
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

  // 添加更长时间运行的测试
  test("executes long running task with high complexity", async () => {
    const result = await longRunningTask(5000, 2000);
    expect(result).toBeDefined();
    expect(typeof result).toBe("number");
  }, 120000); // 2分钟超时

  test("processes multiple files with delays", async () => {
    const totalSize = await processFiles(100, 2000);
    expect(totalSize).toBeGreaterThan(0);
  }, 120000); // 2分钟超时

  test("runs sequential long operations", async () => {
    // 按顺序运行多个耗时操作
    const result1 = await longRunningTask(2000, 1000);
    const result2 = await processFiles(50, 1000);
    const result3 = await performCalculation(2000);

    expect(result1).toBeDefined();
    expect(result2).toBeGreaterThan(0);
    expect(result3).toBeGreaterThan(0);
  }, 180000); // 3分钟超时
});

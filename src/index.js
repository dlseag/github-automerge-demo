function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function performCalculation(n) {
  // Simulate a CPU-intensive task
  let result = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 1000; j++) {
      result += Math.sqrt(i * j);
    }
    if (i % 1000 === 0) {
      // Add some async operations to make it longer
      await sleep(10);
    }
  }
  return result;
}

module.exports = {
  performCalculation,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
};

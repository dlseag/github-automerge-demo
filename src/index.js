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

// 添加更复杂的计算函数，使测试运行更长时间
async function longRunningTask(iterations, complexity) {
  let result = 0;

  for (let i = 0; i < iterations; i++) {
    // 执行复杂的数学计算
    for (let j = 0; j < complexity; j++) {
      result += Math.sin(Math.sqrt(i * j)) * Math.cos(Math.sqrt(i + j));

      // 每隔一段时间添加小的延迟，模拟IO操作
      if (j % 500 === 0 && i % 100 === 0) {
        await sleep(5);
      }
    }

    // 每1000次迭代添加较长的延迟
    if (i % 1000 === 0) {
      await sleep(20);
    }
  }

  return result;
}

// 模拟文件处理操作
async function processFiles(numFiles, fileSize) {
  let totalSize = 0;

  for (let i = 0; i < numFiles; i++) {
    // 模拟读取文件
    const fileContent = await simulateFileRead(fileSize);

    // 模拟处理文件内容
    totalSize += await processFileContent(fileContent, i);

    // 模拟网络延迟
    if (i % 10 === 0) {
      await sleep(50);
    }
  }

  return totalSize;
}

// 辅助函数
async function simulateFileRead(size) {
  await sleep(10);
  return Array(size).fill("x").join("");
}

async function processFileContent(content, index) {
  let sum = 0;
  for (let i = 0; i < content.length / 100; i++) {
    sum += i * index;
    if (i % 1000 === 0) {
      await sleep(1);
    }
  }
  return sum;
}

module.exports = {
  performCalculation,
  longRunningTask,
  processFiles,
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
  },
};

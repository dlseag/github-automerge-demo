# GitHub CI Auto-Merge Demo

这是一个用于演示 GitHub Actions CI 流水线和 PR 自动合并功能的示例项目。

## 功能

- 基本的 Node.js 项目
- 包含长时间运行的测试（约 1-2 分钟）
- PR 获得批准后自动合并

## 工作流程

该项目配置了一个 GitHub Actions 工作流，它会：

1. 在每 次 提交和 PR 时运行测试（耗时约 1-2 分钟）
2. 当 PR 获得至少 1 个批准且测试通过时，自动合并 PR

## 如 何 使 用

1. 创建一个新分支
2. 进行代码修改
3. 提交 PR 到 main 分支
4. 等待 CI 测试完成
5. 请求代码审查并获得批准
6. PR 将自动合并

## 本地测试

```bash
npm install
npm test
```

this is new line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is another line
this is aonther line
this is another line
this is another line
this is another line

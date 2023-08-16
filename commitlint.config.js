module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'new', // 新增功能/模块
        'update', // 功能更新
        'fix', // 修复bug
        'delete', // 删除功能
        'docs', // 文档更新
        'style', // 代码结构优化/注释，不涉及任何逻辑
        'refactor', // 重构(即不是新增功能，也不是修改BUG的代码)
        'perf', // 优化相关，比如提升性能、体验
        'build', // 构建系统修改，如webpack、vite
        'test', // 添加测试
        'ci', // 持续集成修改
        'merge', // 合并代码
        'revert', // 回滚到上一个版本
        'types', // 类型修改
        'release', // 版本发布
      ],
    ],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
  },
};

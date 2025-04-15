# 项目说明

> 项目中的图片需要迁移托管到图床！（如：OSS 等）

## 构建部署

- 修改 `shell` 脚本中的镜像名

```js
IMAGE_NAME = jweboy / $PROJECT_NAME;
```

- 将项目文件同步到服务器
- 在服务器执行 `exec.sh`
- 执行 `exec.sh` 之后会默认进行 `Docker` 打包运行

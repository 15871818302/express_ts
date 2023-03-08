import express from "express";
import routes from "./routes";
import { config } from "../config/default";

// 创建 express 实例
const app = express();

// 全局挂载 json 解析中间件
app.use(express.json());

// const PORT = 3000;
const PORT: number = config.port;

// 启动服务
app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  routes(app);
});

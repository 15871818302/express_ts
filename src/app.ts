import express from "express";
import routes from "./routes";
import { config } from "../config/default";
import initMiddleware from "./middleware";
import dbConnect from "./utils/dbConnect";

// 创建 express 实例
const app = express();

// 挂载中间件
initMiddleware(app);

const PORT: number = config.port;

// 启动服务
app.listen(PORT, async () => {
  console.log(`http://localhost:${PORT}`);
  // 连接数据库
  await dbConnect()
  routes(app);
});

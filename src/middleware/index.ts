import { Express } from "express";
import express from "express";
import responseHeader from "./responseHeader";

// 初始化中间件
function initMiddleware(app: Express) {
  app.use(express.json());
  // 挂载封装的中间件函数
  app.use(responseHeader);
}

export default initMiddleware;

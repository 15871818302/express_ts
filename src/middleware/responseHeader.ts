import { Request, Response, NextFunction } from "express";

// 设置响应头
const responseHeader = (req: Request, res: Response, next: NextFunction) => {
  const { origin, Origin, referer, Referer } = req.headers;

  // 若没有主动配置就设置为通配符
  const allowOrigin = origin || Origin || referer || Referer || "*";

  // 设置请求源
  res.header("Access-Control-Allow-Origin", allowOrigin);
  // 允许头部字段
  res.header("Access-Control-Allow-Headers", "Content-Type");
  // 允许公开的头部字段
  res.header("Access-Control-Expose-Headers", "Content-Disposition");
  // 允许的请求方式
  res.header("Access-Control-Allow-Methods", "PUT,GET,POST,DELETE,OPTIONS");
  // 允许携带cookie
  res.header("Access-Control-Allow-Credentials", "true");

  // 预检返回204
  if (req.method == "OPTIONS") {
    res.sendStatus(204);
  } else {
    next();
  }
};

export default responseHeader;

import { Express, Request, Response, Router } from "express";
import commonRes from "../utils/commonRes";
import slientHandle from "../utils/silentHandle";
import User from './user.routes'

// 配置路由接口
interface RouterConfig {
  path: String;
  router: Router;
  mata?: unknown;
}

// 路由配置
let routerConfig: Array<RouterConfig> = [
  {
    path:'/user',
    router: User
  }
];

// 测试静态错误捕捉的函数
const getInfo = function () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.5 ? resolve("info...") : reject("error...");
    }, 500);
  });
};

// 设置目录基础路由
const routes = (app: Express) => {
  // 根目录
  app.get("/", async (req: Request, res: Response) => {
    const [e, result] = await slientHandle(getInfo);
    e ? commonRes.error(res, null) : commonRes(res, { result });
    // commonRes(res, { word: "hello world" });
  });

  // 其他路由注入
  // 因为入参类型定义的问题，为了避免重载，在conf.path前面强制断言为string类型，用as运算符也可以
  routerConfig.forEach((conf) => app.use(<string>conf.path, conf.router));
};

export default routes;

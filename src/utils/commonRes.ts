import { Response } from "express";
import { Code, CodeMessage, codeType } from "../constants/code";

// 设置返回类型
interface ResOption {
  type?: codeType;
  status?: number;
  message?: unknown;
}

// 默认成功响应
const commonRes = (res: Response, data: unknown, options?: ResOption) => {
  options = Object.assign({ type: Code[200] }, options || {});
  const { type, status, message } = options;
  let resStatus = status;
  // 根据状态设置状态码
  if (resStatus === undefined) {
    resStatus = type === Code[200] ? 200 : 500;
  }
  // 设置响应参数
  const sendRes: { code: number; data: unknown; message?: unknown } = {
    code: Code[type as codeType],
    data,
  };
  // 响应描述
  message && (sendRes.message = message);

  return res.status(resStatus).send(sendRes);
};

// 设置错误响应
commonRes.error = function (
  res: Response,
  data: unknown,
  message?: unknown,
  status?: number
) {
  console.log(message || CodeMessage["error"]);
  this(res, data, {
    type: "error",
    message: message || CodeMessage["error"],
    status: status || 500,
  });
};

// 设置无权限响应
commonRes.denied = function (res: Response, data: unknown) {
  this(res, data, {
    type: "denied",
    message: CodeMessage["denied"],
    status: 401,
  });
};

export default commonRes;

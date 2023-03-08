import { type } from "os";

// 枚举状态码
enum Code {
  success = 200,
  denied = 401,
  error = 500,
}

// 枚举状态字符
enum CodeMessage {
  success = "请求成功",
  denied = "无权限",
  error = "系统请求异常",
}

// 设置状态类型，只能是code枚举的状态
type codeType = keyof typeof Code;

export { Code, CodeMessage, codeType };

/*
* 用于接口参数校验
* */

import { Request, Response, NextFunction } from 'express'
import { AnyZodObject } from 'zod'
import commonRes from "../utils/commonRes";

// 用于接收参数的校验函数
const validate = (schema: AnyZodObject) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse({
        body: req.body,
        query: req.query,
        params: req.params
      })

      next()
    } catch (e) {
      return commonRes.error(res, null, e)
    }
  }
}

export default validate

import { Router } from 'express'
import { createdUserHandler } from "../controller/user.controller";
import validate from "../middleware/validate";
import { createUserSchema } from "../schema/user.schema";

const router = Router()

// 校验接口参数，加上校验中间件
router.post('/create', validate(createUserSchema), createdUserHandler)

export default router

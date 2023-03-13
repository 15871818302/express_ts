import { Request, Response } from 'express'
import commonRes from "../utils/commonRes";
import slientHandle from "../utils/silentHandle";
import {CreateUserInput} from "../schema/user.schema";
import CRUD from "../service/user.service";

export async function createdUserHandler(req: Request<{},{}, CreateUserInput['body']>, res: Response) {
  const [e, user] = await slientHandle(CRUD.create, req.body)

  return e ? commonRes.error(res, null, e.message) : commonRes(res,user)
}

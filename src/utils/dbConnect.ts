import mongoose from "mongoose";
import {config} from "../../config/default";

// 设置 MongoDB 连接
async function dbConnect () {
  const dbUri = config.dbUri
  const dbUser = config.dbUser
  const dbPassword = config.dbPassword
  const dbAuthSource = config.dbAuthSource

  try {
    await mongoose.connect(dbUri, {
      user: dbUser,
      pass: dbPassword,
      authSource: dbAuthSource
    })
    console.log('DB connected')
  } catch (e) {
    console.log(e)
    process.exit(1)
  }
}

export default dbConnect

/*
* 定义数据模块
*/

import mongoose from "mongoose";

// 模板接口
export interface UserDocument extends mongoose.Document {
  name: string,
  account: string,
  password: string,
  createdAt: Date,
  updateAt: Date,
  deleteAt: Date
}

// 模板校验规则
const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    account: { type: String, require: true },
    password: { type: String, require: true }
  },
  {
    timestamps: true
  }
)

// 设置一个唯一值
userSchema.index({account:1, deleteAt: 1}, {unique: true})

// 创建模板，之后会自动在MongoDB中创建响应的模板
const userModel = mongoose.model<UserDocument>('user', userSchema)

export default userModel

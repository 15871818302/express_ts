## 安装MongoDB的注意点

1. 在安装MongoDB的时候，建议将路径选择至c盘或者是d盘，否则可能会导致缺少mongo.exe的文件
2. 在初次连接的时候，会出现连接不上的问题，首先把连接的地址从localhost改成127.0.0.1，如果还连接不上，出现了MongoError：Authentication failed，可以尝试用下面链接的方法 [MongoDB报错解决](https://www.cnblogs.com/fdxjava/p/14914263.html)
3. 在添加具体的用户信息的时候，建议先切换到对应的数据库，使用指令 `use admin`

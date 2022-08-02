## 1. overview

Offical Docs



本教程面向有一点点 MongoDB 基础的同学，知道最简单的 **查询 新增 修改 删除，**本篇文档定位与从初级到中级的一个过渡**.** 这样看起来会好一些。



如果你还不知道 MongoDB 是什么，一些简单的用法都不知道，那么这个可能不太适合你。

## 2. Install On Linux

自己的应用场景更多的是在服务器上，所以这里整理的也是 Linux 的开发手册。



- Configure the package management system

```shell
vim /etc/yum.repos.d/mongodb-org-5.0.repo;


[mongodb-org-5.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/5.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-5.0.asc
```

- Install the MongoDB packages

```shell
sudo yum install -y mongodb-org;

sudo yum install -y mongodb-org-5.0.9 mongodb-org-database-5.0.9 mongodb-org-server-5.0.9 mongodb-org-shell-5.0.9 mongodb-org-mongos-5.0.9 mongodb-org-tools-5.0.9;

sudo chown -R mongod:mongod;
```



## 3. 关于测试数据

原本想要准备一个测试数据集合，不过发现确实找不到合适的，真正想要满足有一个 数据集 可以满足所有的需要讲到的语法，还是不太好找，所以这里我们就不提供测试数据了。



不过我会在每个方法的后面，我都会链接到官网的 example 地址，在那里你可以对照着他提供的数据进行观看。



## 4. 增删查改

和大部分同学一样，我自己最开始接触的都是像 MySQL, SQL Server 这样的关系型数据库，最开始切换到 MongoDB 这样的文档形数据库时，十分的不习惯。



 所以这里我们还是将 SQL 与 mongodb 相关语句放在一起，这里只放简单语句的对比，更加详细的对比情况可以移步到官网 [SQL to MongoDB Mapping Chart](https://www.mongodb.com/docs/manual/reference/sql-comparison/)



假设表结构是这样的

```json
{
  user_id: "abc123",
  age: 55,
  status: "A"
}
```

### 4.1 增加

**SQL**

```sql
INSERT INTO people(user_id, age, status) VALUES ("bcd001", 45, "A")
```

**Mongo**

```shell
db.people.insertOne(
   { user_id: "bcd001", age: 45, status: "A" }
)
```



上面是单个添加, 我们也可以批量添加  insertMany, 对应的 mongodb 语句.

```shell
db.people.insertMany(
  [
     { user_id: "bcd001", age: 45, status: "A" },
     { user_id: "bcd001", age: 45, status: "B" },
  ]
)
```

### 4.2 查询

**SQL**

```sql
SELECT * FROM people;
```

**MongoDB**

```shell
db.people.find()
```

### 4.3 修改

**SQL**

```plsql
UPDATE people SET status = "C" WHERE age > 25
```

**MongoDB**

```shell
db.people.updateMany(
   { age: { $gt: 25 } },
   { $set: { status: "C" } }
)
```

### 4.4 删除

- **SQL**

```plsql
DELETE FROM people WHERE status = "D"
```

- **MongoDB**

```shell
db.people.deleteMany( { status: "D" } )
```

## 5. aggregate

## 6. mongoose 配置
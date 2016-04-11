### 运行dataloader
```
$ node dataloader/init
```

### 运行Server
```
$ node app
```

### api
都是POST请求，请求成功返回200，否则失败。
请求失败返回：
{"error_message":"xxxxxx"}

如果请求的参数是json形式的, 客户端请求接口时必须指名请求头类型 application/json

* /login

<pre>
参数   {"name":"John","password":"xxx"}
返回值    {"name":"John","id":"55e6fb944d28047a33af4a34","session":"55e6fb944d28047a33af4a34"}
</pre>

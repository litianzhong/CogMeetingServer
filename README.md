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
参数   {"code":"xxx"}
返回值 {
      "_id": "570e34a59fb23bdc26657589",
      "code": "7bccfde7714a1ebadf06c5f4cea752c1",
      "_meeting": [
        {
          "_id": "570e34a59fb23bdc26657586",
          "name": "meeting3",
          "endTime": "2016-04-13T11:59:33.616Z",
          "startTime": "2016-04-13T11:59:33.616Z"
        }
      ],
      "_participant": [
        {
          "_id": "570e34a59fb23bdc26657582",
          "name": "Test",
          "gender": "1",
          "company": "Sony"
        }
      ]
    }
</pre>


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
返回值  {
       "_id": "570dd87c3ca556841e6c9686",
       "code": "7bccfde7714a1ebadf06c5f4cea752c1",
       "__v": 0,
       "_meeting": [
         {
           "_id": "570dd87c3ca556841e6c9683",
           "name": "meeting3",
           "__v": 0,
           "endTime": "2016-04-13T05:26:20.030Z",
           "startTime": "2016-04-13T05:26:20.030Z"
         }
       ],
       "_participant": [
         {
           "_id": "570dd87b3ca556841e6c967f",
           "name": "Test",
           "gender": "1",
           "company": "Sony",
           "__v": 0
         }
       ]
     }
</pre>


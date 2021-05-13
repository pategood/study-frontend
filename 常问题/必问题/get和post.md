一.get和post的不同
    传参方式:   get通过url传参, post通过request body传参, get不安全

    缓存: get请求会被浏览器主动缓存吗,而post需要手动设置
          get请求参数会被完整的保留在历史记录上  ,而post不会被保留

    编码: get只能进行url编码  而post  支持多种编码

    数据  get请求的数据量小,post数据量大且安全

    GET在浏览器回退时是无害的，而POST会再次提交请求。

  底:  
    本至上post和get没有url长度限制,长度是被浏览器和服务器限制的
    
    get和post本质都是Tcp链接,GET产生一个TCP数据包；POST产生两个TCP数据包。

      get会把header和data一并发送出去,  而post是先发header,等服务器响应后再发data,服务器在返回数据

    ***所有浏览器都会在POST中发送两次包，Firefox就只发送一次。


二. cookies、sessionStorage和localStorage

cookie
    保存在硬盘中,关闭浏览器,数据还在,有过期时间,有大小限制,4kb  安全性不足 
    每次访问都要传送cookie到服务器,浪费带宽   cookie有存储路径
    操作cookie很困难,操作方法需要自己封装

存储内容: 

cookie只能保存字符串类型，以文本的方式


sessionStorage
    保存在 session对象中,浏览器窗口未关闭就一直保存,
    刷新或进入同源另一页面，数据依然存在


localStorage  永久保存,除非主动删除,不然不会消失


localStorage和sessionStorage
    安全性：  WebStorage不会随着HTTP header发送到服务器端，
              所以安全性相对于cookie来说比较高一些，不会担心截获，但是仍然存在伪造问题；
      webStorage提供了一些方法,数据操作简单,
      例如:
        setItem (key, value) ——  保存数据，以键值对的方式储存信息。

    　　getItem (key) ——  获取数据，将键值传入，即可获取到对应的value值。

    　　removeItem (key) ——  删除单个数据，根据键值移除对应的信息。

    　　clear () ——  删除所有的数据

    　　key (index) —— 获取某个索引的key
      


    相同点:   
        存储大小  存储数据大小一般都是：5MB
        都保存在客户端，不与服务器进行交互通信, 节省了网络流量
      ***  只能存储字符串类型  如果要存储复杂对象就要使用JSON对象的stringify和parse来处理
      
https://images2018.cnblogs.com/blog/1287779/201804/1287779-20180404065845701-1111813120.png


axios拦截器

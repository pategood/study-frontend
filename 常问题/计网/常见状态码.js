// 1xx 响应信息提示 

// 100 - Continue 初始的请求已经接受，客户应当继续发送请求的其余部分
// 101 - Switching Protocols 服务器将遵从客户的请求转换到另外一种协议


// 2xx - 成功 
// 200 - OK 一切正常，对GET和POST请求的应答文档跟在后面。 
// 202 - Accepted 已经接受请求，但处理尚未完成。 
// 203 - Non-Authoritative Information 文档已经正常地返回，
//       但一些应答头可能不正确，因为使用的是文档的拷贝，非权威性信息（HTTP 1.1新）。 


// 3xx - 重定向 

// 301 - Moved Permanently 客户请求的文档在其他地方，新的URL在Location头中给出，GET、HEAD请求时浏览器应该自动地访问新的URL。 
// 302 - Found 类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。

// 4xx - 客户端错误 

// 404 - Not Found 无法找到指定位置的资源。



// 5xx - 服务器错误 

// 基本都是500开头的
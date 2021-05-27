function shallow(object){
  if(!object||typeof object !== 'object') return;
  let newObject =Array.isArray(object) ? [] :{};
  for(let key in object){
    if(object.hasOwnProperty(key) ){
      newObject[key]=object[key]
    }
  }
  return newObject;
}

function deepCopy(object) {
  if (object===null) return null;
  if(!object||typeof object !=='object') return object;

  if(object instanceof RegExp) {
    return new RegExp(object);
  }
  if(object instanceof Data) {
    return new Data(object);
  }
  let newObject =object.hasOwnProperty(object) ?[]:{};
  for(let key in object){
    newObject[key]=object[key]
  }
  return newObject;
}

重点:
let obj2=JSON.parse(JSON.stringify(obj))

/* 
在js中，怎么用一行代码实现深拷贝？它可以实现： JSON.parse(JSON.stringify(obj))。
这行代码的运行过程，就是利用 JSON.stringify 将js对象序列化（JSON字符串），
再使用JSON.parse来反序列化（还原）js对象；
序列化的作用是存储和传输。
（对象本身存储的是一个地址映射，如果断电，对象将不存在，
  所以要将对象的内容转换成字符串的形式再保存在磁盘上）
不过，这种实现深拷贝的方法有局限性，它只适用于一般数据的拷贝（对象、数组），有以下情况需要注意：

*/
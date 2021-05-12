// 一行代码实现深拷贝:

// let objCopy = JSON.parse(JSON.stringify(obj));

// 缺点: 
//  只适用于一般数据的拷贝（对象、数组)
//  
// 一.如果json里面有RegExp,Error对象,则序列化后
//    得到的知识空对象RegExp、Error => {}；

// 二.如果json里有 function,undefined，则序列化
//    的结果会把 function,undefined 丢失； 就没了

// 三.如果json里有NaN、Infinity和-Infinity，则   (Infinity正无穷的数值)
// 序列化的结果会变成null；

// 四.如果json里有对象是由构造函数生成的，则序列化
//    的结果会丢弃对象的 constructor；

// 五.如果obj里面有时间对象，则序列化后的结果
//    时间将只是字符串的形式。而不是时间对象；
// 





// 浅拷贝的实现;

function shallowCopy(object) {
  // 只拷贝对象    必须是对象,不是对象直接返回
  if (!object || typeof object !== "object") return;

  // 根据 object 的类型判断是新建一个数组还是对象
  let newObject = Array.isArray(object) ? [] : {};

  // 遍历 object，并且判断是 object 的属性才拷贝
  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = object[key];
    }
  }

  return newObject;
}

// 深拷贝的实现;

function deepCopy(object) {
  if (!object || typeof object !== "object") return object;

  let newObject = Array.isArray(object) ? [] : {};

  for (let key in object) {
    if (object.hasOwnProperty(key)) {
      newObject[key] = deepCopy(object[key]);
    }
  }

  return newObject;
}
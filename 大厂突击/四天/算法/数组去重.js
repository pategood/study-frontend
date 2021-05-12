/* 
数组去重的思路:
一.双层遍历,讲每一个元素与后面的元素对比,如果是唯一的就放到一个新数组内,多个相同就只放第一个
        也可以将出现相同的元素设为null,最后用filter过滤掉null    
        此方法可以用js的indexOf简化
二.Object 键值对的方式,创建对象将数组的值存成对象的key值 obj[item]=item;
  判断另一个值时,如果以及存在相同的值时就跳过执行下一次循环
三.排序后去重
  先将要去重的数组使用 sort 方法排序后，相同的值就会被排在一块儿，\
    而后咱们就能够只判断当前元素与上一个元素是否相同，相同就说明重复，不相同就添加进 res


 */
// 对象键值对
var arr = [12, 13, 15, 12, 19, 12, 18]
let obj = {}
for (let i = 0; i < arr.length - 1; i++) {
  let item = arr[i];
  if (typeof obj[item] !== 'undefined') {
    arr[i] = arr[arr.length - 1]
    arr.length--;
    i--;
    //跳过余下代码,执行下次循环
    continue;
  }
  obj[item] = item;
}
obj = null;
console.log(arr);

// 借助 js内置的indexOf 进行去重

// function indexOfUniq(arr) {
//   let result = [];
//   for (let i = 0, len = arr.length; i < len; i++) {
//     // 用indexOf 简化了二层循环的流程
//     if (result.indexOf(arr[i]) === -1) result.push(arr[i]);
//   }
//   return result;
// }

// 方法二:
/* var arr=[12,13,15,12,19,12,18]
for(let i=0;i<arr.length-1;i++){
  let item=arr[i];
  let args=arr.slice(i+1);
  if(args.indexOf(item)>-1){
    arr[i]=null;
  }
}
arr.filter(item=>item!==null)
console.log(arr); */


var arr3 = [1, 1, '1'];

function unique(arr3) {
  var res = [];
  var sortedArray = arr3.concat().sort();
  var seen;
  for (var i = 0, len = sortedArray.length; i < len; i++) {
    // 若是是第一个元素或者相邻的元素不相同
    if (!i || seen !== sortedArray[i]) {
      res.push(sortedArray[i])
    }
    seen = sortedArray[i];
  }
  return res;
}
console.log(unique(arr3));
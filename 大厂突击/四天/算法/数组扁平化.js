
es6封装好的扁平化方法flat(级数)

arr=arr.flat(2);

//es6 扩展运算符

var arr=[1,2,5,6,[9,[33]],[22],[24]];
function flatten(arr) {
  while (arr.some((item)=>{Array.isArray(item)})){
    arr=[].concat(...arr)
  } return arr;
}


// 一.reduce  遍历数组每一项,若值相同则递归遍历
  function flatten(arr){
    return arr.reduce((result,item)=>{
      return result.concat(Array.isArray(item)?flatten(item):item);
    },[])
  }


// 二.toString  + split  
// 先转化为字符串在用split分割  最后用map转换为数字

function flatten(arr){
  return arr.toString().split(',').map(function(item){
    return Number(item)
  })
}


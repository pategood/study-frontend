防抖:
效果：持续触发某一事件的时候，函数不执行，等最后一次触发结束的一段时间之后，再去执行

节流:
在一段时间内，只执行一次。
持续触发并不会执行多次
到一定时间再去执行

// 解决搜索bug 输入完全停止后才进行
// 解决方法 使用节流防抖 函数来解决

// // 防抖节流为什么要用闭包？
// 1、对于一个页面上需要多个防抖函数的时候，需要写很多重复代码。
// 2、全局变量污染作用域



function debounce(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    //保证是首次触发并且是立即执行
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};

var realFun = debounce(function() {
  // 滚动中的真正的操作
  console.log('222');
}, 250);

// 绑定监听
input.addEventListener('keyup',realFun)
window.addEventListener('resize', realFun);


// 节流


// 定时器方案
function throttle(fn,wait){
  var timer = null;
  return function(){
      var context = this;
      var args = arguments;
      if(!timer){
          timer = setTimeout(function(){
              fn.apply(context,args);
              timer = null;
          },wait)
      }
  }
}
  
function handle(){
  
  console.log(Math.random());
}
  
window.addEventListener("mousemove",throttle(handle,1000));
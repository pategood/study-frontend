// 防抖动函数


// 简单的防抖动函数
function debounce(func, wait) {
  // 定时器变量
  var timeout;
  return function() {
      // 每次触发 scroll handler 时先清除定时器
      clearTimeout(timeout);
      // 指定 xx ms 后触发真正想进行的操作 handler
      timeout = setTimeout(func, wait);
  };
};

// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
  console.log("Success");
}

// 采用了防抖动
window.addEventListener('scroll',debounce(realFunc,500));
// 没采用防抖动
window.addEventListener('scroll',realFunc);







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

var myEfficientFn = debounce(function() {
  // 滚动中的真正的操作
  console.log('222');
}, 250);

// 绑定监听
input.addEventListener('keyup',myEfficientFn)
window.addEventListener('resize', myEfficientFn);


// 解决搜索bug 输入完全停止后才进行
// 解决方法 使用节流防抖 函数来解决

// 节流

// 简单的节流函数
function throttle(func, wait, mustRun) {
  var timeout,
      startTime = new Date();

  return function() {
      var context = this,
          args = arguments,
          curTime = new Date();

      clearTimeout(timeout);
      // 如果达到了规定的触发时间间隔，触发 handler
      if(curTime - startTime >= mustRun){
          func.apply(context,args);
          startTime = curTime;
      // 没达到触发间隔，重新设定定时器
      }else{
          timeout = setTimeout(func, wait);
      }
  };
};
// 实际想绑定在 scroll 事件上的 handler
function realFunc(){
  console.log("Success");
}
// 采用了节流函数
window.addEventListener('scroll',throttle(realFunc,500,1000));


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
function Foo() {
  getName = function() {
    alert(1);
  };
  return this;
}
Foo.getName = function() {
  alert(2);
};
Foo.prototype.getName = function() {
  alert(3);
};
var getName = function() {
  alert(4);             //被换成1了
};
function getName() {
  alert(5);
}

//请输出以下输出结果：
Foo.getName();     //2
getName();          //4
Foo().getName();   //1             相当于执行Foo函数内的this.getName=fun 赋值  发现函数内没有声明get,所以就找到外面去了,将外面的值替换赋值了            window.
getName();           //1    
new Foo.getName();   //2           实例对象会执行    2
new Foo().getName();             //3          new有参=.成员访问 >()函数调用
new new Foo().getName(); //3
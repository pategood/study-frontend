第一种方法 页面刷新数据不会丢失

先有如下场景 点击当前页的某个按钮跳转到另外一个页面去，并将某个值带过去
<div class="examine" @click="insurance(2)">查看详情</div>

methods: {
  insurance(id) {
    //直接调用$router.push 实现携带参数的跳转
    this.$router.push({
      path: `/particulars/${id}`,
    })
  }

需要对应路由配置如下：
  {
    path: '/particulars/:id',
    name: 'particulars',
    component: particulars
  }

页面获取参数如下

  this.$route.params.id


  
第二种方法 页面刷新数据会丢失

路由属性中的name来确定匹配的路由，
通过params来传递参数。

methods：{
  insurance(id) {
    this.$router.push({
      name: 'particulars',
      params: {
        id: id
      }
    })
  }
对应路由配置: 
  注意这里不能使用:/id来传递参数了，因为组件中，已经使用params来携带参数了。
{
  path: '/particulars',
  name: 'particulars',
  component: particulars
}

this.$route.params.id


第三种方法
使用path来匹配路由，然后通过query来传递参数
这种情况下 query传递的参数会显示在url后面?id=？

methods：{
  insurance(id) {
    this.$router.push({
      path: '/particulars',
      query: {
        id: id
      }
    })
  }
对应路由配置：
{
  path: '/particulars',
  name: 'particulars',
  component: particulars
}
对应子组件: 这样来获取参数

this.$route.query.id
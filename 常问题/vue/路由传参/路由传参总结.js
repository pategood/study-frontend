
第一种 页面刷新不会丢失

使用:/id来传递参数
 $router.push整个path进去路径后面拼接着参数
this.$router.push({ path: `/particulars/${id}`,})

路由需要跟着配置 path: '/particulars/:id',
页面获取参数用 $route.params.参数名
this.$route.params.id


第二种方法 页面刷新数据会丢失

通过params传递参数
this.$router.push({
  name: 'particulars',
  params: {
    id: id
  }
})

页面获取参数:this.$route.params.id

第三种

query传递的参数会显示在url后面?id=？
使用path来匹配路由，然后通过query来传递参数

this.$router.push({
  path: '/particulars',
  query: {
    id: id
  }
})

this.$route.query.id
https://upload-images.jianshu.io/upload_images/10828063-0a4c530cda4c12cb.png?imageMogr2/auto-orient/strip|imageView2/2/format/webp


beforeCreate:  创建实例后,初始完成,但data和methods等都没赋值

created 赋值了

beforeMount {{msg}}

mounted  {{msg}}被换成data里面的值

beforeUpdate    数据发生更新后才会执行,此时data1被修改,但页面的值还是旧的,还未渲染



一般在 created（或beforeMount） 里面就可以，如果涉及到需要页面加载完成之后的话就用 mounted。


在created的时候，视图中的html并没有渲染出来，所以此时如果直接去操作html的dom节点，一定找不到相关的元素
而在mounted中，由于此时html已经渲染出来了，所以可以直接操作dom节点，（此时document.getelementById 即可生效了）。

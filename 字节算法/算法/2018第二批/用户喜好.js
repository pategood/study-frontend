/* 为了不断优化推荐效果，今日头条每天要存储和处理海量数据。假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，
对于一类文章，每个用户都有不同的喜好值，我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，
有多少用户对这类文章喜好值为k。
因为一些特殊的原因，不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。 */


//给前面的回答添加了点注释，方便阅读
let chaxunzuarr = [];    
//第一行输入，用户个数
let yonghushu = readline(),         //5    
  //第二行输入，用户对应喜好，转化为数组
  xihaoduarr = readline().split(' '),
  //第三行输入，查询组数
  chaxunzushu = readline();
//循环所有查询组，4行开始的所有行
for (let i = 0; i < chaxunzushu; i++) {
  //取得每行值，转为数组
  chaxunzuarr[i] = readline().split(' ');
}
let arr = [];
//遍历喜好度数组，将相同喜好度的下标添加进一个新数组
//样例添加完后生成arr=[,[0],[1],[2,3],,[4]]
xihaoduarr.forEach((item, index) => {
  if (arr[item] == undefined) {
    arr[item] = [];
  }
  arr[item].push(index);
});

//遍历查询组
for (let j = 0; j < chaxunzushu; j++) {
  //取得每行第一个数l，转化为下标-1
  let start = chaxunzuarr[j][0] - 1,
    //取得每行第二个数r，转化为下标-1
    end = chaxunzuarr[j][1] - 1,
    //取得每行第三个数k，喜好度
    value = chaxunzuarr[j][2],
    //初始化结果用户个数
    geshu = 0;
  if (arr[value] == undefined) {
    //下标数组为未定义时，无喜好度
    console.log(0);
  } else {
    //循环下标数组内元素，判断元素数组内元素是否处于标号间
    arr[value].forEach(e => {
      if (e >= start && e <= end) {
        geshu++;
      }
    })
    print(geshu);
  }
}
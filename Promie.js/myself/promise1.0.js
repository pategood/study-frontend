class Mypromise {
  constructor(executor) {
    this.status = 'pending' //状态值
    this.value = undefined //成功的返回值
    this.reason = undefined //失败的返回值
    this.onResolvedCallbacks = [] //成功的回调函数
    this.onRejectedCallbacks = [] //失败的回调函数
    // 成功
    let resolve = (value) => {
      // pending用来屏蔽的，resolve和reject只能调用一个，不能同时调用，这就是pending的作用
      if (this.status == 'pending') {
        this.status = 'fullFilled'
        this.value = value
        // 发布执行函数
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    // 失败
    let reject = (reason) => {
      if (this.status == 'pending') {
        this.status = 'rejected'
        this.reason = reason
        //失败执行函数
        this.onRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      // 执行函数
      executor(resolve, reject)
    } catch (err) {
      // 失败则直接执行reject函数
      reject(err)
    }
  }

  then(onResolved, onRejected) {
    // 同步
    if (this.status == 'fullFilled') {
      onResolved(this.value)
    }
    if (this.status == 'rejected') {
      onRejected(this.reason)
    }
    // 异步
    if (this.status == 'pending') {
      // 在pending状态的时候先订阅
      this.onResolvedCallbacks.push(() => {
        // todo
        onResolved(this.value)
      })
      this.onRejectedCallbacks.push(() => {
        // todo
        onRejected(this.reason)
      })
    }
  }
}

const p = new Mypromise((resolve, reject) => {
  setTimeout(function () {
    // resolve('success') // 异步调用的时候，this.status一直是pending状态,不会执行代码了，因此要改装成发布订阅者模式
    reject('failed')
  }, 1000)
  // resolve('success') // 走了成功就不会走失败了
  // throw new Error('失败') // 失败了也会走resolve
  // reject('failed')
})
p.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})
p.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})
p.then((res) => {
  console.log(res)
}, (err) => {
  console.log(err)
})
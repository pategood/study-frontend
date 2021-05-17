const isFunction = (value) => typeof value === 'function'
const PENDING = 'pending'
const RESOLVED = 'fulFilled'
const REJECTED = 'rejected'
const resolvePromise = (promise2, x, resolve, reject) => {
  // x和promise2不能是同一个人，如果是同一个人就报错
  // 加一个开关，防止多次调用失败和成功，跟pending状态值一样的逻辑一样,走了失败就不能走成功了，走了成功一定不能在走失败
  if (promise2 === x) {
    return reject(
      new TypeError('Chaining cycle detected for promise #<promise>')
    )
  }
  // 判断如果x是否是一个对象，判断函数是否是对象的方法有：typeof instanceof constructor toString
  if ((typeof x === 'object' && x != null) || typeof x === 'function') {
    let called
    try { // 预防取.then的时候错误
      let then = x.then // Object.definePropertype
      if (typeof then === 'function') {
        // 用then.call()为了避免在使用一次x.then报错
        then.call(x, y => {
          // resolve(y)// 采用promise的成功结果，并且向下传递
          if (called) {
            return
          }
          called = true
          // y有可能是一个promise，那么我们就要继续使用回调函数,直到解析出来的值是一个普通值
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) {
            return
          }
          called = true
          reject(r) // 采用promise的失败结果，并且向下传递
        })
      } else {
        if (called) {
          return
        }
        called = true
        resolve(x) // x不是一个函数，是一个对象
      }
    } catch (err) {
      if (called) {
        return
      }
      called = true
      reject(err)
    }
  } else {
    // x是一个普通值
    resolve(x)
  }
}
class MyPromise {
  constructor(executor) {
    this.status = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []
    // 成功
    let resolve = (value) => {
      // pending最屏蔽的，resolve和reject只能调用一个，不能同时调用，这就是pending的作用
      if (this.status == PENDING) {
        this.status = RESOLVED
        this.value = value
        // 发布执行函数
        this.onResolvedCallbacks.forEach(fn => fn())
      }
    }
    // 失败
    let reject = (reason) => {
      if (this.status == PENDING) {
        this.status = REJECTED
        this.reason = reason
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
  then(onFulFilled, onRejected) {
    // onfulfilled, onrejected 都是可选参数
    onFulFilled = isFunction(onFulFilled) ? onFulFilled : data => data
    onRejected = isFunction(onRejected) ? onRejected : err => {
      throw err
    }
    let promise2 = new MyPromise((resolve, reject) => {
      // 箭头函数，无论this一直是指向最外层的对象
      // 同步
      if (this.status == RESOLVED) {
        setTimeout(() => {
          try {
            let x = onFulFilled(this.value)
            // 添加一个resolvePromise（）的方法来判断x跟promise2的状态，决定promise2是走成功还是失败
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) { // 中间任何一个环节报错都要走reject()
            reject(err)
          }
        }, 0) // 同步无法使用promise2，所以借用setiTimeout异步的方式
        // MDN 0>=4ms
      }
      if (this.status == REJECTED) {
        setTimeout(() => {
          try {
            let x = onRejected(this.reason)
            resolvePromise(promise2, x, resolve, reject)
          } catch (err) { // 中间任何一个环节报错都要走reject()
            reject(err)
          }
        }, 0) // 同步无法使用promise2，所以借用setiTimeout异步的方式
      }
      // 异步
      if (this.status == PENDING) {
        // 在pending状态的时候先订阅
        this.onResolvedCallbacks.push(() => {
          // todo
          setTimeout(() => {
            try {
              let x = onFulFilled(this.value)
              resolvePromise(promise2, x, resolve, reject)
            } catch (err) { // 中间任何一个环节报错都要走reject()
              reject(err)
            }
          }, 0) // 同步无法使用promise2，所以借用setiTimeout异步的方式
        })
        this.onRejectedCallbacks.push(() => {
          // todo
          setTimeout(() => {
            try {
              let x = onRejected(this.reason)
              resolvePromise(promise2, x, resolve, reject)
            } catch (err) { // 中间任何一个环节报错都要走reject()
              reject(err)
            }
          }, 0) // 同步无法使用promise2，所以借用setiTimeout异步的方式
        })
      }
    })
    return promise2
  }
}
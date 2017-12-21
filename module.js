// 模块的声明，用module.exports={}来声明,
// 我们声明的时候，exports的是什么。我们用的就是什么
module.exports = {
  getSum: (...vars) => {
    let sum = 0
    for (let v of vars) {
      sum += v
    }
    return sum
  }
}

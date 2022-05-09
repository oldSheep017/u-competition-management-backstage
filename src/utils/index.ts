/**
 * @description 返回随机字符串
 * @param length { Number } 字符串长度 默认为5
 * @param upper { Boolean } 是否全大写 默认为true
 * @returns 返回随机字符串
 */
const randomString = (length?: number, upper: boolean = true) => {
  const random = Math.random().toString(32).slice(2, length ? length + 2 : 7)
  return upper ? random.toUpperCase() : random
}

export {
  randomString
}
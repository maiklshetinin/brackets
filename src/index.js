module.exports = function check(str, bracketsConfig) {
  console.log(str)
  console.log(bracketsConfig)
  const open = [], close = []
  const stack = []
  bracketsConfig.forEach((el) => {
    open.push(el[0])
    close.push(el[1])
  })
  for (let i = 0; i < str.length; i++) {
    if (open.includes(str[i]) && close.includes(str[i])) {
      if (stack.includes(str[i])) {
        stack.pop()
      } else {
        stack.push(str[i])
      }
    }
    else if (open.includes(str[i])) {
      stack.push(str[i])
    } else {
      if (close.indexOf(str[i]) === open.indexOf(stack[stack.length - 1])) {
        stack.pop()
      } else { return false }
    }
  }
  console.log(open)
  console.log(close)
  return stack.length === 0
}

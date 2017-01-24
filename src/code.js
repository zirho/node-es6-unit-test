// your code goes here
function *hello() {
  let i = 0
  // eslint-disable-next-line
  while (true) {
    yield i++
  }
}

const i = hello()

export default i

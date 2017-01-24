import 'babel-polyfill'
import should from 'should'

describe('true', () => {
  it('should be true', () => {
    function* hello() {
      let i = 0
      while(true) {
        yield i++
      }
    }

    const i = hello()
    should(0).be.equal(i.next().value)
  })
})

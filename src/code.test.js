import 'babel-polyfill'
import should from 'should'

import i from './code'

describe('true', () => {
  it('should be true', () => {
    should(0).be.equal(i.next().value)
  })
})

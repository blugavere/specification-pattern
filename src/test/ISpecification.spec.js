import chai from 'chai'
import ISpecification from './../app/ISpecification'
import Constants from './../app/Constants'
const expect = chai.expect

/** @test {ISpecification} */
describe('ISpecification', () => {
  let spec

  beforeEach(() => {
    spec = new ISpecification()
  })

  /** @test {ISpecification#isSatisfied} */
  describe('ISpecification#isSatisfied', () => {
    it('should throw an error,telling not implemented', () => {
      expect(() => spec.isSatisfied()).to.throw(Constants.ISSATIFIED_NOT_IMPLEMENT)
    })
  })

  /** @test {ISpecification#and} */
  describe('ISpecification#and', () => {
    it('should throw an error, telling not implemented', () => {
      expect(() => spec.and()).to.throw(Constants.AND_NOT_IMPLEMENT)
    })
  })

  /** @test {ISpecification#or} */
  describe('ISpecification#or', () => {
    it('should throw an error, telling not implemented', () => {
      expect(() => spec.or()).to.throw(Constants.OR_NOT_IMPLEMENT)
    })
  })

  /** @test {ISpecification#not} */
  describe('ISpecification#not', () => {
    it('should throw an error, telling not implemented', () => {
      expect(() => spec.not()).to.throw(Constants.NOT_NOT_IMPLEMENT)
    })
  })
})

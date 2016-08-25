import Constants from './Constants'
/**
 * Simulate an abstract class behaviour
 */
export default class ISpecification {
  /**
   * Simulates a contract with the extended classes
   * This method has to be redefined in child implementations
   * @params {Object} obj The object to compare to
   */
  isSatisfied (obj) {
    throw new Error(Constants.ISSATIFIED_NOT_IMPLEMENT)
  }

  /**
   * Simulates a contract with the extended classes
   * This method has to be redefined in child implementations
   * @params {Object} obj The object to compare to
   */
  and (obj) {
    throw new Error(Constants.AND_NOT_IMPLEMENT)
  }

  /**
   * Simulates a contract with the extended classes
   * This method has to be redefined in child implementations
   * @params {Object} obj The object to compare to
   */
  or (obj) {
    throw new Error(Constants.OR_NOT_IMPLEMENT)
  }

  /**
   * Simulates a contract with the extended classes
   * This method has to be redefined in child implementations
   * @params {Object} obj The object to compare to
   */
  not (obj) {
    throw new Error(Constants.NOT_NOT_IMPLEMENT)
  }
}

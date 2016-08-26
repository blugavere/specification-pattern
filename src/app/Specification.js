import ISpecification from './ISpecification'
/**
 * Create a Specification
 */
export default class Specification extends ISpecification {
  /**
   * Implements the and method
   * @params {ISpecification} spec An object of ISpecification implementation
   * @return {AndSpecification} An object of ISpecification implementation
   */
  and (spec) {
    return new AndSpecification(this, spec)
  }

  /**
   * Implements the or method
   * @params {ISpecification} spec An object of ISpecification implementation
   * @return {AndSpecification} An object of ISpecification implementation
   */
  or (spec) {
    return new OrSpecification(this, spec)
  }

  /**
   * Implements the or method
   * @params {ISpecification} spec An object of ISpecification implementation
   * @return {AndSpecification} An object of ISpecification implementation
   */
  not (spec) {
    return new NotSpecification(this, spec)
  }
}

/**
 * hronous and specificaiton
 */
export class AndSpecification extends Specification {
  /**
   * Create a new AndSpecification
   * @params {Object} firstSpec A Specification
   * @params {Object} secondSpec A Specification
   */
  constructor (firstSpec, secondSpec) {
    super()
    /**
     * The first spec argument
     * @type {Specification}
     */
    this.firstSpec = firstSpec
    /**
     * The second spec argument
     * @type {Specification}
     */
    this.secondSpec = secondSpec
  }

  /**
   * Check if the rules are respected
   * @params {Object} candidate The candidate to the test
   * @return {Boolean} The result of the comparison
   */
  isSatisfied (candidate) {
    return this.firstSpec.isSatisfied(candidate) && this.secondSpec.isSatisfied(candidate)
  }
}

/**
 * hronous or specificaiton
 */
export class OrSpecification extends Specification {
  /**
   * Create a new OrSpecification
   * @params {Specification} firstSpec A Specification
   * @params {Specification} secondSpec A Specification
   */
  constructor (firstSpec, secondSpec) {
    super()
    /**
     * The first spec argument
     * @type {Specification}
     */
    this.firstSpec = firstSpec
    /**
     * The second spec argument
     * @type {Specification}
     */
    this.secondSpec = secondSpec
  }

  /**
   * Check if the rules are respected
   * @params {Object} candidate The candidate to the test
   * @return {Boolean} The result of the comparison
   */
  isSatisfied (candidate) {
    return this.firstSpec.isSatisfied(candidate) || this.secondSpec.isSatisfied(candidate)
  }
}

/**
 * hronous not specificaiton
 */
export class NotSpecification extends Specification {
  /**
   * Create a new NotSpecification
   * @params {Specification} firstSpec A Specification
   * @params {Specification} secondSpec A Specification
   */
  constructor (firstSpec) {
    super()
    /**
     * The first spec argument
     * @type {Specification}
     */
    this.firstSpec = firstSpec
  }

  /**
   * Check if the rules are respected
   * @params {Object} candidate The candidate to the test
   * @return {Boolean} The result of the comparison
   */
  isSatisfied (candidate) {
    return !this.firstSpec.isSatisfied(candidate)
  }
}

class Checker {
  static testConditions(value, conditions) {
    for (const condition of conditions) {
      const { check, error, params } = condition

      if (!check(value, ...params)) {
        return { ok: false, error }
      }
    }
    return { ok: true, error: '' }
  }

  constructor(conditionFunction, conditionFunctionDefaultParams = [], error) {
    this.check = conditionFunction
    this.error = error
    this.params = conditionFunctionDefaultParams
  }
}

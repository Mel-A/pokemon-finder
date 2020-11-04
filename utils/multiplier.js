const multiplier = {
  doubleDamageFrom: 2,
  noDamageFrom: 0,
  halfDamageFrom: 0.5
}

const damageBreakPoint = {
  weak: value => value > 1,
  strong: value => value < 1 && value > 0,
  inmune: value => value == 0
}

const returnValues = (finalValues, damage) => 
  Object.keys(finalValues).filter(key => 
    damage(finalValues[key])).map(name =>
      ({ multi: finalValues[name], type: name })
  )

const applyMultiplication = values => {
  const mulplicatedValues = {}

  values.forEach(({ type, multi })  => 
  mulplicatedValues[type] = mulplicatedValues.hasOwnProperty(type) ? mulplicatedValues[type] * multi : multi)

  return mulplicatedValues
}

const formatArray = (arr, result) => {
  Object.keys(arr).forEach(key => 
    arr && arr[key].forEach(item => {
      result.push({multi: multiplier[key], type: item.name })
    })
  )
}

export {
  damageBreakPoint,
  applyMultiplication, 
  multiplier,
  formatArray,
  returnValues
}
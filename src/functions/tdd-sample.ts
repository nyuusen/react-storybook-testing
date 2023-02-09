export const add = (...numbers: number[]) => {
  if (numbers === undefined || numbers.length === 0 || numbers.length > 30) {
    throw new Error()
  }

  const result = numbers.reduce<number>((acc, cur) => {
    return acc + cur
  }, 0)

  return result > 1000 ? 'too big' : result
}

export const subtract = (...numbers: number[]) => {
  if (numbers === undefined || numbers.length === 0 || numbers.length > 30) {
    throw new Error()
  }

  const result = numbers.reduce<number>((acc, cur, index) => {
    if (index === 0) return acc = cur
    return acc - cur
  }, 0)

  return result < 0 ? 'negative number' : result
}

export const multiply = (...numbers: number[]) => {
  if (numbers === undefined || numbers.length === 0 || numbers.length > 30) {
    throw new Error()
  }

  const result = numbers.reduce<number>((acc, cur) => {
    return acc * cur
  }, 1)

  return result > 1000 ? 'big big number' : result
}

export const divide = (...numbers: number[]) => {
  if (numbers === undefined || numbers.length === 0 || numbers.length > 30) {
    throw new Error()
  }

  const result = numbers.reduce<number>((acc, cur, index) => {
    if (index === 0) return acc = cur
    return acc / cur
  }, 0)

  return Number.isInteger(result) ? result : Math.floor(result)
}
import { add, subtract, multiply, divide } from './tdd-sample'

describe('add', () => {
  it('1と2を渡したら、3を返す', () => {
    expect(add(1, 2)).toBe(3)
  })
  it('引数がない場合は、エラーが発生する', () => {
    expect(() => add()).toThrowError()
  })
  it('1を30個を渡したら、30を返す', () => {
    const args = Array<number>(30).fill(1)
    expect(add(...args)).toBe(30)
  })
  it('1を31個を渡したら、エラーが発生する', () => {
    const args = Array<number>(31).fill(1)
    expect(() => add(...args)).toThrowError()
  })
  it('計算結果が1000の場合は、1000を返す', () => {
    expect(add(1, 999)).toBe(1000)
  })
  it('計算結果が1000を超える場合は、too bigを返す', () => {
    expect(add(1, 1000)).toBe('too big')
  })
})

describe('subtract', () => {
  it('2と1を渡したら、1を返す', () => {
    expect(subtract(2, 1)).toBe(1)
  })
  it('10と1と2を渡したら、7を返す', () => {
    expect(subtract(10, 1, 2)).toBe(7)
  })
  it('引数がない場合は、エラーが発生する', () => {
    expect(() => subtract()).toThrowError()
  })
  it('引数が30個の場合は、計算結果を返す', () => {
    const args = [...Array<number>(15).fill(1), ...Array<number>(15).fill(-1)]
    expect(subtract(...args)).toBe(2)
  })
  it('1を31個を渡したら、エラーが発生する', () => {
    const args = Array<number>(31).fill(1)
    expect(() => subtract(...args)).toThrowError()
  })
  it('計算結果が0の場合は、0を返す', () => {
    expect(subtract(1, 1)).toBe(0)
  })
  it('計算結果がマイナスの場合は、negative numberを返す', () => {
    expect(subtract(1, 2)).toBe('negative number')
  })
})

describe('multiply', () => {
  it('1と2を渡したら、2を返す', () => {
    expect(multiply(1, 2)).toBe(2)
  })
  it('引数がない場合は、エラーが発生する', () => {
    expect(() => multiply()).toThrowError()
  })
  it('1を30個を渡したら、1を返す', () => {
    const args = Array<number>(30).fill(1)
    expect(multiply(...args)).toBe(1)
  })
  it('1を31個を渡したら、エラーが発生する', () => {
    const args = Array<number>(31).fill(1)
    expect(() => multiply(...args)).toThrowError()
  })
  it('計算結果が1000の場合は、1000を返す', () => {
    expect(multiply(500, 2)).toBe(1000)
  })
  it('計算結果が1000を超える場合は、big big numberを返す', () => {
    expect(multiply(1001, 1)).toBe('big big number')
  })
})

describe('divide', () => {
  it('100と10を渡したら、10を返す', () => {
    expect(divide(100, 10)).toBe(10)
  })
  it('引数がない場合は、エラーが発生する', () => {
    expect(() => divide()).toThrowError()
  })
  it('1を30個を渡したら、1を返す', () => {
    const args = Array<number>(30).fill(1)
    expect(divide(...args)).toBe(1)
  })
  it('1を31個を渡したら、エラーが発生する', () => {
    const args = Array<number>(31).fill(1)
    expect(() => divide(...args)).toThrowError()
  })
  it('計算結果が小数点を含む場合は、小数点以下が切り捨てられる', () => {
    expect(divide(10, 3)).toBe(3)
  })
})

export {}
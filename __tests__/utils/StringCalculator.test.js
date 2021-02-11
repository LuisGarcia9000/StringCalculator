import { calc } from '../../src/utils/StringCalculator'

test('1+2 = 3', () => {
    expect(calc('1+2')).toBe(3)
})

test('10+2 = 12', () => {
    expect(calc('10+2')).toBe(12)
})

test('10+22 = 22', () => {
    expect(calc('10+22')).toBe(32)
})

test('10-2 = 8', () => {
    expect(calc('10-2')).toBe(8)
})

test('10-2+2 = 10', () => {
    expect(calc('10-2+2')).toBe(10)
})

test('10-2+2+10 = 20', () => {
    expect(calc('10-2+2+10')).toBe(20)
})

test('4-7+8+9 = 14', () => {
    expect(calc('4-7+8+9')).toBe(14)
})

test('4-7+8+9-100 = -86', () => {
    expect(calc('4-7+8+9-100')).toBe(-86)
})

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

test('4/2 = 2', () => {
    expect(calc('4/2')).toBe(2)
})

test('2/4 = 0.5', () => {
    expect(calc('2/4')).toBe(0.5)
})

test('1+2/4 = 1.5', () => {
    expect(calc('1+2/4')).toBe(1.5)
})
test('100+2/4 = 100.5', () => {
    expect(calc('100+2/4')).toBe(100.5)
})
test('100+200/400 = 100.5', () => {
    expect(calc('100+200/400')).toBe(100.5)
})

test('100-50+8/8 = 51', () => {
    expect(calc('100-50+8/8')).toBe(51)
})

test('100/50+8/8 = 3', () => {
    expect(calc('100/50+8/8')).toBe(3)
})

test('100/10/5/8 = 0.25', () => {
    expect(calc('100/10/5/8')).toBe(100/10/5/8)
})

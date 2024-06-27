import StringCalculator from '../src/StringCalculator';

test('empty string returns 0', () => {
    expect(StringCalculator.add("")).toBe(0);
});

test('one number returns the number', () => {
    expect(StringCalculator.add("1")).toBe(1);
});

test('two numbers returns their sum', () => {
    expect(StringCalculator.add("1,2")).toBe(3);
});

test('multiple numbers returns their sum', () => {
    expect(StringCalculator.add("1,2,3,4")).toBe(10);
});

test('new lines between numbers', () => {
    expect(StringCalculator.add("1\n2,3")).toBe(6);
});

test('different delimiters', () => {
    expect(StringCalculator.add("//;\n1;2")).toBe(3);
});

test('negative numbers throw exception', () => {
    expect(() => StringCalculator.add("1,-2,3,-4")).toThrow("negatives not allowed: -2, -4");
});

test('numbers greater than 1000 are ignored', () => {
    expect(StringCalculator.add("2,1001")).toBe(2);
});

test('delimiters of any length', () => {
    expect(StringCalculator.add("//[***]\n1***2***3")).toBe(6);
});

test('multiple delimiters', () => {
    expect(StringCalculator.add("//[*][%]\n1*2%3*4")).toBe(10);
});

test('multiple delimiters of any length', () => {
    expect(StringCalculator.add("//[***][%%]\n1***2%%3")).toBe(6);
});

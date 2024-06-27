# String Calculator

A simple string calculator implemented in TypeScript that supports multiple delimiters and custom delimiter definitions. It follows the given requirements and includes unit tests using Jest.

## Features

1. Handles an empty string.
2. Handles one or two numbers separated by commas.
3. Handles an unknown number of numbers.
4. Handles new lines between numbers (instead of commas).
5. Supports different delimiters.
6. Throws an exception for negative numbers.
7. Ignores numbers greater than 1000.
8. Supports delimiters of any length.
9. Supports multiple delimiters of varying lengths.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/Ankitkr5858/string-calculator.git
    cd string-calculator
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

## Project Structure

```plaintext
/project-root
├── src
│   └── StringCalculator.ts
├── steps
│   └── StringCalculator.ts
├── tests
│   └── StringCalculator.test.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Usage
The StringCalculator class contains a static method add that takes a string of numbers and returns their sum. The string can contain delimiters, new lines, and custom delimiters.

Example
Create a file named index.ts:

    import StringCalculator from './src/StringCalculator';

    console.log(StringCalculator.add("")); // Output: 0
    console.log(StringCalculator.add("1")); // Output: 1
    console.log(StringCalculator.add("1,2")); // Output: 3
    console.log(StringCalculator.add("1\n2,3")); // Output: 6
    console.log(StringCalculator.add("//;\n1;2")); // Output: 3
    console.log(StringCalculator.add("//[***]\n1***2***3")); // Output: 6
    console.log(StringCalculator.add("//[*][%]\n1*2%3")); // Output: 6

Compile and run the file:

```bash
npx tsc index.ts
node index.ts
```

## Running Tests
To run the tests, use the following command:

```bash
npm test
```

#### Adding New Tests
To add new tests, create a new file in the tests directory or add new test cases to StringCalculator.test.ts.

```
import StringCalculator from '../src/StringCalculator';

test('negative numbers throw exception', () => {
    expect(() => StringCalculator.add("1,-2,3,-4")).toThrow("negatives not allowed: -2, -4");
});
```

## Explanation of Code for Each Step
You can check code for each step from following route:

```plaintext
/project-root
├── steps
│   └── StringCalculator.ts
```

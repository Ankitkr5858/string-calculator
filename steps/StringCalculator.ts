// Step 1: Handling empty string, one, and two numbers
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        const parts = numbers.split(',');
        if (parts.length === 1) {
            return parseInt(parts[0]);
        }

        return parseInt(parts[0]) + parseInt(parts[1]);
    }
}

// Step 2: Handling an unknown amount of numbers
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        const parts = numbers.split(',');
        return parts.reduce((sum, part) => sum + parseInt(part), 0);
    }
}

// Step 3: Handling new lines between numbers
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        numbers = numbers.replace(/\n/g, ',');
        const parts = numbers.split(',');
        return parts.reduce((sum, part) => sum + parseInt(part), 0);
    }
}

// Step 4: Support different delimiters
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = parts[0].substring(2);
            numbers = parts[1];
        }

        numbers = numbers.replace(/\n/g, delimiter);
        const parts = numbers.split(delimiter);
        return parts.reduce((sum, part) => sum + parseInt(part), 0);
    }
}

// Step 5: Handling negative numbers
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = parts[0].substring(2);
            numbers = parts[1];
        }

        numbers = numbers.replace(/\n/g, delimiter);
        const parts = numbers.split(delimiter);
        const negatives = parts.filter(part => parseInt(part) < 0).map(part => parseInt(part));

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.reduce((sum, part) => sum + parseInt(part), 0);
    }
}

// Step 6: Ignoring numbers greater than 1000
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = parts[0].substring(2);
            numbers = parts[1];
        }

        numbers = numbers.replace(/\n/g, delimiter);
        const parts = numbers.split(delimiter);
        const negatives = parts.filter(part => parseInt(part) < 0).map(part => parseInt(part));

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.reduce((sum, part) => {
            const num = parseInt(part);
            return num <= 1000 ? sum + num : sum;
        }, 0);
    }
}

// Step 7: Delimiters can be of any length
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        const customDelimiterMatch = numbers.match(/^\/\/(\[.+?\])+\n/);
        if (customDelimiterMatch) {
            const delimiters = customDelimiterMatch[0].match(/\[(.+?)\]/g)?.map(d => d.slice(1, -1)) || [];
            numbers = numbers.slice(customDelimiterMatch[0].length);

            const delimiterRegex = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
            numbers = numbers.replace(delimiterRegex, ',');
        } else if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = parts[0].substring(2);
            numbers = parts[1];
            numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
        }

        numbers = numbers.replace(/\n/g, ',');
        const parts = numbers.split(',');
        const negatives = parts.filter(part => parseInt(part) < 0).map(part => parseInt(part));

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.reduce((sum, part) => {
            const num = parseInt(part);
            return num <= 1000 ? sum + num : sum;
        }, 0);
    }
}

// Step 8: Handling delimiters of any length
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        const customDelimiterMatch = numbers.match(/^\/\/(\[.+?\])+\n/);
        if (customDelimiterMatch) {
            const delimiters = customDelimiterMatch[0].match(/\[(.+?)\]/g)?.map(d => d.slice(1, -1)) || [];
            numbers = numbers.slice(customDelimiterMatch[0].length);

            const delimiterRegex = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
            numbers = numbers.replace(delimiterRegex, ',');
        } else if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = parts[0].substring(2);
            numbers = parts[1];
            numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
        }

        numbers = numbers.replace(/\n/g, ',');
        const parts = numbers.split(',');
        const negatives = parts.filter(part => parseInt(part) < 0).map(part => parseInt(part));

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.reduce((sum, part) => {
            const num = parseInt(part);
            return num <= 1000 ? sum + num : sum;
        }, 0);
    }
}

// Step 9: Handling multiple delimiters
class StringCalculator {
    static add(numbers: string): number {
        if (!numbers) {
            return 0;
        }

        let delimiter = ',';
        const customDelimiterMatch = numbers.match(/^\/\/(\[.+?\])+\n/);
        if (customDelimiterMatch) {
            const delimiters = customDelimiterMatch[0].match(/\[(.+?)\]/g)?.map(d => d.slice(1, -1)) || [];
            numbers = numbers.slice(customDelimiterMatch[0].length);

            const delimiterRegex = new RegExp(delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|'), 'g');
            numbers = numbers.replace(delimiterRegex, ',');
        } else if (numbers.startsWith('//')) {
            const parts = numbers.split('\n', 2);
            delimiter = parts[0].substring(2);
            numbers = parts[1];
            numbers = numbers.replace(new RegExp(delimiter, 'g'), ',');
        }

        numbers = numbers.replace(/\n/g, ',');
        const parts = numbers.split(',');
        const negatives = parts.filter(part => parseInt(part) < 0).map(part => parseInt(part));

        if (negatives.length > 0) {
            throw new Error(`negatives not allowed: ${negatives.join(', ')}`);
        }

        return parts.reduce((sum, part) => {
            const num = parseInt(part);
            return num <= 1000 ? sum + num : sum;
        }, 0);
    }
}

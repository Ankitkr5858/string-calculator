export default class StringCalculator {
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

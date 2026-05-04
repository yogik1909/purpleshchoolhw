import makeOrdinal = require('./makeOrdinal');
import isFinite = require('./isFinite');
import isSafeNumber = require('./isSafeNumber');

const TEN = 10;
const ONE_HUNDRED = 100;
const ONE_THOUSAND = 1000;
const ONE_MILLION = 1_000_000;
const ONE_BILLION = 1_000_000_000; //         1.000.000.000 (9)
const ONE_TRILLION = 1_000_000_000_000; //     1.000.000.000.000 (12)
const ONE_QUADRILLION = 1_000_000_000_000_000; // 1.000.000.000.000.000 (15)
const MAX = 9_007_199_254_740_992; // 9.007.199.254.740.992 (15)

const LESS_THAN_TWENTY: readonly string[] = [
    'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
    'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',
];

const TENTHS_LESS_THAN_HUNDRED: readonly string[] = [
    'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',
];

function toWords(number: number, asOrdinal: boolean): string {
    if (!isFinite(number)) {
        throw new TypeError(
            'Not a finite number: ' + String(number) + ' (' + typeof number + ')',
        );
    }
    if (!isSafeNumber(number)) {
        throw new RangeError(
            'Input is not a safe number, it’s either too large or too small.',
        );
    }
    const words = generateWords(number);
    return asOrdinal ? makeOrdinal(words) : words;
}

function generateWords(number: number, words?: string[]): string {
    let remainder: number;
    let word: string;
    const parts = words ?? [];

    // We’re done
    if (number === 0) {
        return parts.length === 0 ? 'zero' : parts.join(' ').replace(/,$/, '');
    }
    // If negative, prepend “minus”
    if (number < 0) {
        parts.push('minus');
        number = Math.abs(number);
    }

    if (number < 20) {
        remainder = 0;
        word = LESS_THAN_TWENTY[number]!;
    } else if (number < ONE_HUNDRED) {
        remainder = number % TEN;
        word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)]!;
        // In case of remainder, we need to handle it here to be able to add the “-”
        if (remainder) {
            word += '-' + LESS_THAN_TWENTY[remainder]!;
            remainder = 0;
        }
    } else if (number < ONE_THOUSAND) {
        remainder = number % ONE_HUNDRED;
        word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';
    } else if (number < ONE_MILLION) {
        remainder = number % ONE_THOUSAND;
        word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';
    } else if (number < ONE_BILLION) {
        remainder = number % ONE_MILLION;
        word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';
    } else if (number < ONE_TRILLION) {
        remainder = number % ONE_BILLION;
        word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';
    } else if (number < ONE_QUADRILLION) {
        remainder = number % ONE_TRILLION;
        word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';
    } else if (number <= MAX) {
        remainder = number % ONE_QUADRILLION;
        word =
            generateWords(Math.floor(number / ONE_QUADRILLION)) + ' quadrillion,';
    } else {
        throw new RangeError('Number is too large to convert to words.');
    }

    parts.push(word);
    return generateWords(remainder, parts);
}

export = toWords;

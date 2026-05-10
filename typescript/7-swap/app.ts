// Написать функцию, которая меняет местами ключи и значения в объекте.При этом они там одного типа.

//     Пример:

// const obj: Record<string, number> = {
//     a: 1,
//     b: 2
// }

// const res = swapKeysAndValues(obj);
// /*
// {
//   1: 'a',
//   2: 'b'
// }
// */


function swapKeysAndValues<T extends Record<string, any>>(obj: T): Record<string, any> {

    function toString<T>(data: T): string {
        if (Array.isArray(data)) {
            return data.toString()
        }

        switch (typeof data) {
        case 'number':
        case 'boolean':
        case 'symbol':
        case 'function':
        case 'string':
            return data.toString();
        case 'object':
            return JSON.stringify(data);
        default:
                return String(data);
        }
    }
        
    
    const result: Record<string, any> = {};
    for (const [key, value] of Object.entries(obj)) {
        result[toString(value)] = key;
    }
    return result


}

const obj: Record<string, number> = {
    a: 1,
    b: 2
}

const res = swapKeysAndValues(obj);
console.log(res);
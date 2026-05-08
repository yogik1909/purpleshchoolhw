
type Backet = {
    key: Key;
    value: any;
    next: Backet | null;
}

type Key = string | number;

class MyMap {
    private newtCapacity: number = 16;
    private fillFactor: number = 0.75;
    private _size: number = 0;
    private capacity: number;
    private buckets: Backet[] = [];
    constructor() {
        this.capacity = this.newtCapacity;
        this.buckets = new Array(this.capacity).fill(null);
    }

    private hash(key: Key): number {
        if (typeof key === 'string') {
            return key.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % this.capacity;
        }
        return key % this.capacity;
    }

    public set(key: Key, value: any): void{
        const curIndex = this.hash(key);
        const newItemBucket: Backet = {key, value, next: null};

        const curBucket = this.buckets[curIndex];

        if (curBucket === null) {
            this.buckets[curIndex] = newItemBucket;
            this._size++;
            return;
        } else{
            newItemBucket.next = curBucket as Backet;
            this.buckets[curIndex] = newItemBucket;
            this._size++;
            return;
        }
    }

    public delete(key: Key): number {
        const curIndex = this.hash(key);
        const curBucket = this.buckets[curIndex];
        if (curBucket === null || curBucket?.key !== key) {
            return this._size;
        } else {
            this.buckets[curIndex] = curBucket.next as Backet;
            this._size--;
            return this._size;
        }
    }

    public clear(): void {
        this.capacity = this.newtCapacity;
        this.buckets = new Array(this.capacity).fill(null);
        this._size = 0;
    }

    public get(key: Key, defaultValue?: any): any {
        const curIndex = this.hash(key);
        const curBucket = this.buckets[curIndex];
        return curBucket?.value ?? defaultValue;
    }

    public toString(): string {
        let result: string[] = [];
        for (const bucket of this.buckets) {
            if (bucket !== null) {
                result.push(`${bucket?.key}: ${bucket?.value}`);
            }
        }
        return result.join(' | ');
    }

    get size(): number {
        return this._size;
    }

}
  
// Пример добавления данных
let weatherMap = new MyMap();
weatherMap.set('London', 20);
weatherMap.set('Berlin', 25);
// Пример получения данных
console.log(weatherMap.get('London')); // Выведет 20
console.log(weatherMap.toString()); // Выведет "London: 20 | Berlin: 25"
console.log(weatherMap.delete('London')); // Выведет 1
console.log(weatherMap.toString()); // Выведет "Berlin: 25"

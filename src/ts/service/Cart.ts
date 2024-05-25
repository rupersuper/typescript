import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    calculateTotal(): number {
        let result: number = 0;
        this._items.forEach((item) => {
            result += item.price
        })
        return result;
    }

    calculateDiscount(discount: number): number {
        const result = this.calculateTotal();
        return result - (result * (discount / 100));
    }

    removeItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
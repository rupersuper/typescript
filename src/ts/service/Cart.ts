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
        return this._items.reduce((acc: number, item: Buyable): number => 
         acc + item.price, 0)
    }
    
    calculateDiscount(discount: number): number {
        const result = this.calculateTotal();
        return result - (result * (discount / 100));
    }

    removeItem(id: number): void {
        this._items = this._items.filter(item => item.id !== id);
    }
}
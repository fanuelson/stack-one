import { EmptyStackException } from "./empty-stack-exception";

export class Stack {

    constructor() {
        this.stack = [];
        this.minIndexes = [];
    }
    
    push(intValue) {
        this.stack.push(intValue);
        let isLower = false;

        try {
            const lastMinIndex = this._getLastItem(this.minIndexes);
            isLower = intValue <= this.stack[lastMinIndex];
        } catch (err) {
            isLower = true;
        }

        if(isLower) {
            const minIndex = this.stack.length - 1;
            this.minIndexes.push(minIndex);
        }
        
    }

    pop() {
        const popItem = this._getLastItem(this.stack);
        const lastMinIndex = this._getLastItem(this.minIndexes);
        if (popItem == this.stack[lastMinIndex]) {
            this._removeLastItem(this.minIndexes);
        }
        this._removeLastItem(this.stack);
        return popItem;
    }

    getMinValue() {
        let lastMinIndex = this._getLastItem(this.minIndexes);
        return this.stack[lastMinIndex];  
    }

    _removeLastItem(list) {
        list.splice(list.length - 1, 1);
    }

    _getLastItem(list) {
        const index = list.length - 1;
        if(index >= 0) {
            return list[index];
        }
        throw new EmptyStackException("Empty list") 
    }
}
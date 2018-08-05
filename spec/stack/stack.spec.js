import { Stack } from '../../src/stack/stack';
import { EmptyStackException } from '../../src/stack/empty-stack-exception';

describe("Stack Tests", function () {

    describe("push", function () {

        it("should increase length with empty stack", function () {
            let stack = new Stack();
            stack.push(2);
        
            expect(stack.stack.length).toBe(1);
        });

        it("should insert element in the last position with a single value", function () {
            let stack = new Stack();
            stack.push(2);
            stack.push(1);
        
            expect(stack.stack[stack.stack.length - 1]).toBe(1);
        });

    });

    describe("pop", function () {
        it("should throw exception with a empty stack", function () {
            let stack = new Stack();
        
            expect( function() { stack.pop() }).toThrow(new EmptyStackException("Empty list"));
        });
        
        it("should return the item poped with a single item", function () {
            let stack = new Stack();
            stack.push(1);

            let removedItem = stack.pop();
            expect( removedItem ).toBe(1);
        });

        it("should return the item poped with two items", function () {
            let stack = new Stack();
            stack.push(1);
            stack.push(2);

            let removedItem = stack.pop();
            expect( removedItem ).toBe(2);
        });

        
    })

    describe("min", function () {
        it("should throw exception with empty list", function () {
            let stack = new Stack();
            
            expect( function() { stack.getMinValue() } ).toThrow(new EmptyStackException("Empty list"));
        });

        it("should return min value with a single value pushing a higher value", function () {
            let stack = new Stack();
            stack.push(2);
            stack.push(3);
        
            expect(stack.getMinValue()).toBe(2);
        });

        it("should return min value with a single value pushing same value", function () {
            let stack = new Stack();
            stack.push(2);
            stack.push(2);
        
            expect(stack.getMinValue()).toBe(2);
        });
        it("should return min value with a single value pushing a lower value", function () {
            let stack = new Stack();
            stack.push(2);
            stack.push(1);
        
            expect(stack.getMinValue()).toBe(1);
        });
    })
});

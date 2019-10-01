import calculate from './calculate';
// import { isMainThread } from 'worker_threads';

describe('calculator logic', () =>{
    describe('return calculator state based on integer click',() =>{
        const currentState = {
            total: '0',
            next: null,
            operation: null,
        };
        const keyPressed = '9';
        const expected = {'next':'9','total':null}
        it('return appropriate state object for pressing a single int with no previous entries',() =>{
            expect(calculate(currentState,keyPressed)).toEqual(expected);
        })
    })

    describe('return correct error for division by 0',() =>{
        const currentState = {
            total: '9',
            next: '0',
            operation: '÷',
        };
        const keyPressed = '=';
        const expected = {'next':null,'total':NaN,'operation':null}
        it('return appropriate state object for division by zero',() =>{
            expect(() =>{calculate(currentState,keyPressed)}).toThrowError('Division by zero');
        })
    })
})
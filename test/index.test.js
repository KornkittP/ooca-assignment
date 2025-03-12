const foodStore = require('../src/index')
const utils = require('../src/utils')
const discounts = require('../src/discount')

describe('test order function', () => {
    test('order 1x orange to equals 120', () => {
        expect(foodStore.order({ 
            "orange": 1 
        })).toBe(120)
    });

    test('order 1x orange with membership to equals 108', () => {
        expect(foodStore.order({ 
            "orange": 1 
        }, true)).toBe(108)
    });

    test('order 1x red and 1x green to equals 90', () => {
        expect(foodStore.order({ 
            "red": 1,
            "green": 1 
        })).toBe(90)
    });

    test('order 1x red and 1x green with membership to equals 81', () => {
        expect(foodStore.order({ 
            "red": 1,
            "green": 1 
        }, true)).toBe(81)
    });

    test('order 2x red and 2x green to equals 171', () => {
        expect(foodStore.order({ 
            "red": 2,
            "green": 2 
        })).toBe(171)
    });

    test('order 2x red and 2x green with membership to equals 153', () => {
        expect(foodStore.order({ 
            "red": 2,
            "green": 2 
        }, true)).toBe(153)
    });
})


describe('test discountFoodSet function', () => {
    test('order 1x orange, get no discount', () => {
        expect(discounts.discountFoodSet({ 
            "orange": 1
        })).toBe(0)
    });

    test('order 1x pink, get no discount', () => {
        expect(discounts.discountFoodSet({ 
            "pink": 1
        })).toBe(0)
    });

    test('order 1x green, get no discount', () => {
        expect(discounts.discountFoodSet({ 
            "green": 1
        })).toBe(0)
    });

    test('order 2x orange, get 5% discount', () => {
        expect(discounts.discountFoodSet({ 
            "orange": 2
        })).toBe(.05)
    });

    test('order 2x pink, get 5% discount', () => {
        expect(discounts.discountFoodSet({ 
            "pink": 2
        })).toBe(.05)
    });

    test('order 2x green, get 5% discount', () => {
        expect(discounts.discountFoodSet({ 
            "green": 2
        })).toBe(.05)
    });

    test('order 1x green and 1x orange, get no discount', () => {
        expect(discounts.discountFoodSet({ 
            "green": 1,
            "orange": 1
        })).toBe(0)
    });
})

describe('test membership function', () => {
    test('has membership, get 10% discount', () => {
        expect(discounts.membership(true)).toBe(.1)
    });

    test('has no membership, get no discount', () => {
        expect(discounts.membership(false)).toBe(0)
    });
})
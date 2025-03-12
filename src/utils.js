const foodItems = require("./foodItems.json")

function totalPrice(items) {
    let total = 0
    for (let item in items) {
        total += foodItems[item] * items[item]
    }
    return total
}

module.exports = {
    totalPrice
}
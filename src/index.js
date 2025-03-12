const { membership, discountFoodSet } = require("./discount")
const { totalPrice } = require("./utils")

function order(items, member=false) {
    // items: { "orange": 3, ... }

    let total = totalPrice(items)
    let discount = membership(member) + discountFoodSet(items)

    return total - (total * discount)

}

module.exports = {
    order
}